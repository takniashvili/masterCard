import "./App.css";
import { useState } from "react";
import CardHolder from "./Components/Inputs/CardHolder";
import ExpiryMonth from "./Components/Inputs/ExpiryMonth";
import ExpiryYear from "./Components/Inputs/ExpiryYear";
import Cvc from "./Components/Inputs/Cvc";
import Button from "./Components/Button";

import backgroundImage from "./images/bg-main-mobile.png";
import cardBack from "./images/bg-card-back.png";
import cardFront from "./images/bg-card-front.png";
import cardLogo from "./images/card-logo.svg";
import completedLogo from "./images/icon-complete.svg";

function App() {
  const [cardname, setCardName] = useState("");
  const [cardnum, setCardNum] = useState("");
  const [mm, setMm] = useState("");
  const [yy, setYy] = useState("");
  const [cvc, setCvc] = useState("");
  const [render, setRender] = useState(true);

  const handleRender = () => {
    setRender(!render);
  };

  return render ? (
    <div className="App">
      <div className="flex justify-center items-center flex-col">
        <img
          className="backgroundHeader"
          src={backgroundImage}
          alt="backgroundImage"
        />
        <div className="absolute mb-5 ml-14">
          <img className="cardBack" src={cardBack} alt="cardBack" />
        </div>
        <div className="absolute mt-40 mr-14">
          <img className="cardFront" src={cardFront} alt="cardFront" />
        </div>
        <div className="cardLogo">
          <img className="cardLogoImg" src={cardLogo} alt="circle" />
        </div>
        <div className="cvc"> 000 </div>
        <div className="cardNumber">0000 0000 0000 0000</div>
        <div className="userName">George Takniashvili </div>
        <div className="cardLimit"> 00/23 </div>
      </div>
      <div className="main">
        <div className="mainChild">
          <div className="text"> CARDHOLDER NAME </div>
          <CardHolder cardname={cardname} setCardName={setCardName} />
          <div className="text"> CARD NUMBER </div>
          <input
            className="cardHolderInput"
            placeholder="0000 0000 0000 0000"
            value={cardnum}
            maxLength={19}
            onChange={(e) => {
              const inputValue = e.target.value.replace(/\s/g, "");
              if (isNaN(inputValue) || !/^\d+$/.test(inputValue)) {
                setCardNum("");
              } else {
                const formattedValue = inputValue
                  .replace(/(\d{4})/g, "$1 ")
                  .trim();
                setCardNum(formattedValue);
              }
            }}
          />
          <div className="flex gap-7">
            <div className="text"> EXP.DATE (MM/YY) </div>
            <div className="text"> CVC </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <ExpiryMonth mm={mm} setMm={setMm} />

            <ExpiryYear yy={yy} setYy={setYy} />

            <Cvc cvc={cvc} setCvc={setCvc} />
          </div>
          <Button
            handleRender={handleRender}
            setRender={setRender}
            cardname={cardname}
            cardnum={cardnum}
            mm={mm}
            yy={yy}
            cvc={cvc}
          />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="flex justify-center items-center flex-col">
        <img
          className="backgroundHeader"
          src={backgroundImage}
          alt="backgroundImage"
        />
        <div className="absolute mb-5 ml-14">
          <img className="cardBack" src={cardBack} alt="cardBack" />
        </div>
        <div className="absolute mt-40 mr-14">
          <img className="cardFront" src={cardFront} alt="cardFront" />
        </div>
        <div className="cardLogo">
          <img className="cardLogoImg" src={cardLogo} alt="circle" />
        </div>
        <div className="cvc"> {cvc} </div>
        <div className="cardNumber2"> {cardnum} </div>
        <div className="userName"> {cardname} </div>
        <div className="cardLimit">
          {" "}
          {mm}/{yy}{" "}
        </div>
      </div>
      <div className="main2">
        <img src={completedLogo} alt="succes" />
        <div className="thanksText"> THANK YOU!</div>
        <div className="pText"> We've added your card details </div>
      </div>
    </div>
  );
}

export default App;
