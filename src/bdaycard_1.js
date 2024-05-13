import React from "react";
import Confetti from "react-dom-confetti";
import { css, injectGlobal } from "@emotion/css";
import SecondComponent from "./secondcomp";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Fredoka+One');
  .birthdayPage1 {
    font-family: 'Fredoka One', cursive;
  }
`;

class BirthdayPage1 extends React.Component {
  state = {
    item: "🎁",
    confetti: false,
    hint: "(don't forget to open your present!)",
    showSecondComponent: false,
  };

  openPresent = () => {
    let presents = ["🎂"];
    this.setState({
      item: presents[Math.floor(Math.random() * Math.floor(presents.length))],
      confetti: true,
      hint: "",
      showSecondComponent: true,
    });
  };

  render() {
    const config = {
      angle: 90,
      spread: 45,
      startVelocity: 45,
      elementCount: 50,
      decay: 0.9,
    };

    return (
      <div className="birthdayPage1">
        {!this.state.showSecondComponent ? (
          <>
            <div className={titleContainer}>
              <div className={title}> Happy Birthday! </div>
              <div className={hint}> {this.state.hint} </div>
            </div>
            <div className={presentContainer}>
              <Confetti active={this.state.confetti} config={config} />
              <button className={presentButton} onClick={this.openPresent}>
                {this.state.item}
              </button>
            </div>
          </>
        ) : (
          <SecondComponent />
        )}
      </div>
    );
  }
}

export default BirthdayPage1;

const titleContainer = css`
  display: flex;
  justify-content: center;
  margin-top: 300px;
  text-align: center;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    margin-top: 250px;
  }
`;

const presentContainer = css`
  display: flex;
  justify-content: center;
`;

const presentButton = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 50px;
  &:focus {
    outline: 0;
  }
  @media only screen and (max-width: 600px) {
    @keyframes opacity-change {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(20deg);
      }
      50% {
        transform: rotate(-20deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    animation: opacity-change 1s infinite;
  }
  &:hover {
    @keyframes opacity-change {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(20deg);
      }
      50% {
        transform: rotate(-20deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    animation: opacity-change 1s infinite;
  }
`;

const title = css`
  font-size: 50px;
`;

const hint = css`
  font-size: 10px;
`;
