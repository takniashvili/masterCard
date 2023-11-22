import React from "react";

export default function Cvc(props) {
  let cvc = props.cvc;
  let setCvc = props.setCvc;
  return (
    <div>
      {" "}
      <input
        className="cvcInput"
        placeholder="000"
        value={cvc}
        maxLength={3}
        onChange={(e) => {
          const inputValue = e.target.value;
          if (isNaN(inputValue) || !/^\d+$/.test(inputValue)) {
            setCvc("");
          } else {
            setCvc(inputValue);
          }
        }}
      />
    </div>
  );
}
