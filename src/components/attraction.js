import React from "react";
import "./attraction.css";

const attractions = [
    {
      name: "ಶ್ರೀ ಸಿಗಂದೂರು ಚೌಡೇಶ್ವರಿ ದೇವಾಲಯ",
      description: "ಅಪಾರ ಮಹಿಮೆಯುಳ್ಳ ದೈವೀ ಶಕ್ತಿ ಪೀಠಗಳಲ್ಲಿ ಶ್ರೀ ಸಿಗಂದೂರು ಚೌಡೇಶ್ವರಿ ಅಮ್ಮನವರ ಕ್ಷೇತ್ರವೂ ಒಂದು. ಇಲ್ಲಿನ ದೇವಿಯ ದರ್ಶನವನ್ನು ಪಡೆಯಲು ದೇಶ ವಿದೇಶಗಳಿಂದ ಭಕ್ತರು ಭೇಟಿ ನೀಡುತ್ತಾರೆ. ಶ್ರೀ ಸಿಗಂದೂರು ಚೌಡೇಶ್ವರಿ ದೇವಸ್ಥಾನವು ಭಾರತದ ಕರ್ನಾಟಕ ರಾಜ್ಯದ ಶಿವಮೊಗ್ಗದ ಸಿಗಂದೂರು, ಕಳಸವಳ್ಳಿಯಲ್ಲಿದೆ. ಈ ದೈವಿಕ ದೇವಾಲಯವು ಸಿಗಂದೂರು ಗ್ರಾಮದ ಪ್ರಮುಖ ಆಕರ್ಷಣೆಯ ಶಕ್ತಿಯಾಗಿದೆ.",
      distance: "0.4km from KRS Guest House",
      image: "sigandur.jpg",
    },
    {
      name: "ಶರಾವತಿ ನದಿ",
      description: "ಶರಾವತಿ ನದಿಯು ತೀರ್ಥಹಳ್ಳಿ ತಾಲೂಕಿನ ಅಂಬುತೀರ್ಥ ಎಂಬ ಸ್ಥಳದಲ್ಲಿ ಹುಟ್ಟುತ್ತದೆ . ಪುರಾತನ ದಂತಕಥೆಯ ಪ್ರಕಾರ, ರಾಮ ದೇವರು ತನ್ನ ಅಂಬು (ಬಿಲ್ಲು ಮತ್ತು ಬಾಣ ಎಂದು ಅನುವಾದಿಸುತ್ತದೆ) ತನ್ನ ಹೆಂಡತಿ ಸೀತಾ ಬಾಯಾರಿಕೆಯಿಂದ ನೆಲಕ್ಕೆ ಹೊಡೆದನು . ಅವನ ಬಾಣವು ನೆಲಕ್ಕೆ ಬಡಿದಾಗ, ನೀರು ಸುರಿಯಿತು (ತೀರ್ಥ ಎಂದು ಅನುವಾದಿಸುತ್ತದೆ) ಮತ್ತು ಅವಳ ಬಾಯಾರಿಕೆಯನ್ನು ನೀಗಿಸಿತು. ದಂತಕಥೆಯ ಪ್ರಕಾರ ನದಿಯು ಈ ಘಟನೆಯೊಂದಿಗೆ ಹುಟ್ಟಿಕೊಂಡಿರುವುದರಿಂದ, ನದಿಯನ್ನು ಶರಾವತಿ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.",
      distance: "4km from KRS Guest House",
      image: "Sharavthi.jpg",
    },
    {
      name: "ಜೋಗ ಜಲಪಾತ",
      description: "ಜೋಗ ಜಲಪಾತ ಭಾರತದಲ್ಲಿ ಎರಡನೇ ಅತ್ಯಧಿಕ ಧುಮುಕುವ ಜಲಪಾತವಾಗಿದೆ. ಇದು ಮಳೆ ಮತ್ತು ಋತುವಿನ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರುವ ಒಂದು ವಿಭಜಿತ ಜಲಪಾತವಾಗಿದೆ. ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲೆ ಸಾಗರ ತಾಲ್ಲೂಕಿನ ಜೋಗ ಜಲಪಾತ ವೀಕ್ಷಣಾ ಸ್ಥಳ ಒಂದು ಪ್ರಮುಖ ಪ್ರವಾಸಿ ಆಕರ್ಷಣೆಯಾಗಿದೆ ಮತ್ತು ಜಲಪಾತ ಪಟ್ಟಿಯಲ್ಲಿ ಪ್ರಪಂಚದಲ್ಲೇ 13 ನೇ ಸ್ಥಾನದಲ್ಲಿದೆ. ಈ ಜಲಪಾತವನ್ನು ಗೇರುಸೊಪ್ಪ ಜಲಪಾತ ಹಾಗೂ ಜೋಗದಗುಂಡಿ ಎಂದು ಕೂಡ ಕರೆಯುತ್ತಾರೆ.",
      distance: "70 km from KRS Guest House",
      image: "jogfalls.jpg",
    },
    {
        name: "ಕೊಡಚಾದ್ರಿ",
        description: "ಕೊಡಚಾದ್ರಿಯು ದಟ್ಟವಾದ ಕಾಡುಗಳನ್ನು ಹೊಂದಿರುವ ಪರ್ವತ ಶಿಖರವಾಗಿದೆ, ಸಮುದ್ರ ಮಟ್ಟದಿಂದ ಸುಮಾರು 1343 ಮೀ ಗಳಷ್ಟು ಎತ್ತರದಲ್ಲಿದೆ. ಇದು ಕರ್ನಾಟಕ ಸರ್ಕಾರದಿಂದ ಪಾರಂಪರಿಕ ನೈಸರ್ಗಿಕ ಸ್ಥಳದ ಮಾನ್ಯತೆ ಪಡೆದಿದೆ.",
        distance: "150 km from KRS Guest House",
        image: "kodachadri.jpg",
      }
  ];

const AttractionsList = () => {


    return (
        <div className="attraction-container">
          {attractions.map((attraction, index) => (
            <div className="attraction-card" key={index}>
              <img 
                src={attraction.image} 
                alt={attraction.name} 
                className="attraction-image" 
              />
              <div className="attraction-info">
                <h1 className="attraction-title">{attraction.name}</h1>
                <p className="attraction-description">{attraction.description}</p>
                <p className="attraction-distance">Distance: {attraction.distance}</p>
              </div>
            </div>
          ))}
        </div>
      );
    };

export default AttractionsList;
