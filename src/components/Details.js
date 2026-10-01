import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarCheck,
  FaCheckCircle,
  FaClock,
  FaCreditCard,
  FaIdCard,
  FaInfoCircle,
  FaKey,
  FaMobileAlt,
  FaMoneyBillWave,
  FaPaw,
  FaSmokingBan,
  FaTimesCircle,
  FaUser,
  FaUserFriends,
  FaUtensils,
  FaWallet,
  FaWineBottle,
  FaLightbulb,
  FaLock,
  FaTools,
  FaTrashAlt,
  FaUsers,
  FaVolumeMute,
} from "react-icons/fa";
import "./Details.css";

/* ---------- Static content (kept outside the component) ---------- */

const TIMINGS = [
  { id: "check-in", label: "Check-in", value: "After 4:00 PM", hint: "Arrival time", Icon: FaArrowRight },
  { id: "check-out", label: "Check-out", value: "Before 10:00 AM", hint: "Departure time", Icon: FaArrowLeft },
];

const NOTICES = [
  {
    id: "extension",
    title: "Early check-in & late check-out",
    Icon: FaClock,
    body: [
      "Early check-in is subject to availability. Call on the arrival date to confirm availability and get the updated check-in time.",
      "Late check-out requests are confirmed at check-in, depending on room availability.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation",
    Icon: FaCalendarCheck,
    body: [
      <>
        Cancellations are allowed up to <strong>48 hours</strong> before the
        check-in date, subject to nominal charges.
      </>,
    ],
  },
];

const ACCEPTED_PAYMENTS = [
  { id: "upi", value: "UPI", hint: "GPay, PhonePe, Paytm & more", Icon: FaMobileAlt },
  { id: "cash", value: "Cash", hint: "Pay at the property", Icon: FaMoneyBillWave },
];

const NOT_ACCEPTED_PAYMENTS = [
  { id: "credit", value: "Credit cards", Icon: FaCreditCard },
  { id: "debit", value: "Debit cards", Icon: FaCreditCard },
  { id: "other", value: "Any other payment method", hint: "Only UPI and cash are accepted", Icon: FaTimesCircle },
];

const DEPOSIT_NOTICE = {
  id: "deposit",
  title: "Refundable key deposit",
  Icon: FaKey,
  body: [
    <>
      A key deposit of <strong>₹500 per room</strong> is collected at the time of check-in.
    </>,
    "This amount is separate and is not included in the room rent. It is paid on arrival, and the room and key are checked at check-out, after which the full deposit is returned to you.",
  ],
};

const RULES = [
  { Icon: FaPaw, text: "Pets are not allowed inside the rooms.", important: true },
  { Icon: FaUtensils, text: "Cooking is not permitted inside the rooms or near the guest house.", important: true },
  { Icon: FaUserFriends, text: "Accommodation is not available for unmarried couples." },
  { Icon: FaUser, text: "Single occupancy bookings are not accepted." },
  { Icon: FaSmokingBan, text: "Smoking is strictly prohibited inside the rooms." },
  { Icon: FaWineBottle, text: "Alcohol consumption is not allowed on the premises." },
  { Icon: FaIdCard, text: "Guests must carry a valid government-issued ID proof at check-in." },
  { Icon: FaKey, text: "A refundable key deposit of ₹500 per room is collected on arrival and returned after check-out, once the room and key are checked." },
  { Icon: FaUsers, text: "Outside visitors are not allowed inside the rooms. Only the guests named in the booking may stay." },
  { Icon: FaVolumeMute, text: "Please keep noise to a minimum, especially at night, out of respect for other guests." },
  { Icon: FaTools, text: "Guests are responsible for any damage to rooms, furniture or property during their stay, and charges may apply." },
  { Icon: FaLightbulb, text: "Please switch off lights, fans and AC when leaving the room." },
  { Icon: FaTrashAlt, text: "Please keep the rooms and premises clean and dispose of waste only in the bins provided." },
  { Icon: FaLock, text: "The guest house is not responsible for loss of valuables or personal belongings. Please lock your room when you go out." },
];

const INITIAL_RULES_COUNT = 5;

/* ---------- Small presentational pieces ---------- */

const SectionHeading = ({ id, Icon, title, subtitle }) => (
  <div className="section-heading">
    <span className="icon-tile" aria-hidden="true">
      <Icon />
    </span>
    <div>
      <h2 id={id}>{title}</h2>
      <p>{subtitle}</p>
    </div>
  </div>
);

const Notice = ({ id, title, Icon, body }) => (
  <aside className={`notice notice--${id}`}>
    <span className="notice__icon" aria-hidden="true">
      <Icon />
    </span>
    <div>
      <h3>{title}</h3>
      {body.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  </aside>
);

const InfoCards = ({ items }) => (
  <dl className="timing-grid">
    {items.map(({ id, label, value, hint, Icon }) => (
      <div className={`timing-card timing-card--${id}`} key={id}>
        <span className="timing-card__icon" aria-hidden="true">
          <Icon />
        </span>
        <div>
          <dt>{label}</dt>
          <dd>
            <strong>{value}</strong>
            <small>{hint}</small>
          </dd>
        </div>
      </div>
    ))}
  </dl>
);

const PaymentPanel = ({ variant, title, StatusIcon, items }) => (
  <div className={`pay-panel pay-panel--${variant}`}>
    <h3 className="pay-panel__title">
      <StatusIcon aria-hidden="true" />
      {title}
    </h3>
    <ul className="pay-panel__list">
      {items.map(({ id, value, hint, Icon }) => (
        <li className="pay-item" key={id}>
          <span className="pay-item__icon" aria-hidden="true">
            <Icon />
          </span>
          <div>
            <strong>{value}</strong>
            {hint && <small>{hint}</small>}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

/* ---------- Page ---------- */

const Details = () => {
  const [showAllRules, setShowAllRules] = useState(false);
  const visibleRules = showAllRules ? RULES : RULES.slice(0, INITIAL_RULES_COUNT);
  const hiddenCount = RULES.length - INITIAL_RULES_COUNT;

  return (
    <main className="details-page">
      <div className="details-container">
        <header className="details-header">
          <h1>Know Before You Stay</h1>
          <p>
            A quick guide to timings, payments and house rules at{" "}
            <strong>KRS Guest House</strong>.
          </p>
        </header>

        <section className="details-card" aria-labelledby="stay-heading">
          <SectionHeading
            id="stay-heading"
            Icon={FaClock}
            title="Check-in & check-out"
            subtitle="Plan your arrival and departure."
          />

          <InfoCards items={TIMINGS} />

          {NOTICES.map((notice) => (
            <Notice key={notice.id} {...notice} />
          ))}
        </section>

        <section className="details-card" aria-labelledby="payment-heading">
          <SectionHeading
            id="payment-heading"
            Icon={FaWallet}
            title="Payments & key deposit"
            subtitle="How to pay and what to expect on arrival."
          />

          <div className="pay-grid">
            <PaymentPanel
              variant="accepted"
              title="Accepted"
              StatusIcon={FaCheckCircle}
              items={ACCEPTED_PAYMENTS}
            />
            <PaymentPanel
              variant="denied"
              title="Not accepted"
              StatusIcon={FaTimesCircle}
              items={NOT_ACCEPTED_PAYMENTS}
            />
          </div>

          <Notice {...DEPOSIT_NOTICE} />
        </section>

        <section className="details-card" aria-labelledby="rules-heading">
          <SectionHeading
            id="rules-heading"
            Icon={FaInfoCircle}
            title="Rules & regulations"
            subtitle="Please read before you book."
          />

          <ul className="rules-list">
            {visibleRules.map(({ Icon, text, important }) => (
              <li className={`rule${important ? " rule--important" : ""}`} key={text}>
                <span className="rule__icon" aria-hidden="true">
                  <Icon />
                </span>
                <p>{text}</p>
                {important && <span className="rule__badge">Important</span>}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="rules-toggle"
            onClick={() => setShowAllRules((v) => !v)}
            aria-expanded={showAllRules}
          >
            {showAllRules ? "Show less" : `View ${hiddenCount} more rules`}
          </button>
        </section>

        <footer className="acknowledgement">
          <span className="notice__icon" aria-hidden="true">
            <FaInfoCircle />
          </span>
          <div>
            <strong>Guest acknowledgement</strong>
            <p>
              By making a reservation, guests agree to follow all property rules and
              regulations during their stay.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Details;