import React from "react";

export default function CardHolder(props) {
  let cardname = props.cardname;
  let setCardName = props.setCardName;

  return (
    <div>
      {" "}
      <input
        className="cardHolderInput"
        placeholder="e.g. George Takniashvili"
        value={cardname}
        maxLength={30}
        onChange={(e) => {
          const inputValue = e.target.value;
          if (/^\d+$/.test(inputValue) || /^\d/.test(inputValue)) {
            setCardName("");
          } else {
            setCardName(inputValue);
          }
        }}
      />
    </div>
  );
}
