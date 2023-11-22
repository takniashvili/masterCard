import React from "react";

export default function ExpiryMonth(props) {
  let mm = props.mm;
  let setMm = props.setMm;
  return (
    <div>
      {" "}
      <input
        className="MM-YYInput"
        placeholder="0"
        value={mm}
        maxLength={2}
        onChange={(e) => {
          const inputValue = e.target.value;
          if (
            isNaN(inputValue) ||
            !/^\d+$/.test(inputValue) ||
            inputValue < 1 ||
            inputValue > 12
          ) {
            setMm("");
          } else {
            setMm(inputValue);
          }
        }}
      />
    </div>
  );
}
