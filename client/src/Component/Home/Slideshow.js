import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Fade } from "react-slideshow-image";

const Slideshow = () => {
  const fadeImages = [
    "../../images/Slide_1.jpg",
    "../../images/Slide_4.png",
    "../../images/Slide_5.png",
  ];

  return (
    <div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} />
            </div>
            <p>CTE-Learning brings the whole classroom home</p>
          </div>
          <div className="each-fade">
            <p>
              CTE-Learning website for online communication in the education
              industry
            </p>
            <div>
              <img src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} />
            </div>
            <p>CTE-Learning connects the future</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Slideshow;
