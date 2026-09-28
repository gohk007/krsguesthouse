import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarCheck,
  FaClock,
  FaIdCard,
  FaInfoCircle,
  FaPaw,
  FaSmokingBan,
  FaUser,
  FaUserFriends,
  FaUtensils,
  FaWineBottle,
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

const RULES = [
  { Icon: FaPaw, text: "Pets are not allowed inside the rooms.", important: true },
  { Icon: FaUtensils, text: "Cooking is not permitted inside the rooms or near the guest house.", important: true },
  { Icon: FaUserFriends, text: "Accommodation is not available for unmarried couples." },
  { Icon: FaUser, text: "Single occupancy bookings are not accepted." },
  { Icon: FaSmokingBan, text: "Smoking is strictly prohibited inside the rooms." },
  { Icon: FaWineBottle, text: "Alcohol consumption is not allowed on the premises." },
  { Icon: FaIdCard, text: "Guests must carry a valid government-issued ID proof at check-in." },
];

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

/* ---------- Page ---------- */

const Details = () => (
  <main className="details-page">
    <div className="details-container">
      <header className="details-header">
        <h1>
          Guest house policies
        </h1>
        <p>
          Everything you need to know before your stay at <strong>KRS Guest House</strong>.
        </p>
      </header>

      <section className="details-card" aria-labelledby="stay-heading">
        <SectionHeading
          id="stay-heading"
          Icon={FaClock}
          title="Check-in & check-out"
          subtitle="Plan your arrival and departure."
        />

        <dl className="timing-grid">
          {TIMINGS.map(({ id, label, value, hint, Icon }) => (
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

        {NOTICES.map((notice) => (
          <Notice key={notice.id} {...notice} />
        ))}
      </section>

      <section className="details-card" aria-labelledby="rules-heading">
        <SectionHeading
          id="rules-heading"
          Icon={FaInfoCircle}
          title="Rules & regulations"
          subtitle="Please read before you book."
        />

        <ul className="rules-list">
          {RULES.map(({ Icon, text, important }) => (
            <li className={`rule${important ? " rule--important" : ""}`} key={text}>
              <span className="rule__icon" aria-hidden="true">
                <Icon />
              </span>
              <p>{text}</p>
              {important && <span className="rule__badge">Important</span>}
            </li>
          ))}
        </ul>
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

export default Details;