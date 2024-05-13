import React from "react";
import "./second_styles.css";

const SecondComponent = () => (
  <div className="s2body">
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY MIA!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY MIA!</h3>
        <p>Dear Mia,</p>
        <p style={{ fontFamily: "serif" }}>
          Happy 20th birthday!! I hope your day is filled with lots of joy and
          laughter! Have the best day ever!
        </p>
        <p className="name">Robby</p>
      </div>
    </div>
  </div>
);

export default SecondComponent;
