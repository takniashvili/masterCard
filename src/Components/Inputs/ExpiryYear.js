import React from "react";

export default function ExpiryYear(props) {
  let yy = props.yy;
  let setYy = props.setYy;

  return (
    <div>
      {" "}
      <input
        className="MM-YYInput"
        placeholder="23"
        value={yy}
        maxLength={2}
        onChange={(e) => {
          const inputValue = e.target.value;
          let inputValueStart = inputValue.padStart(2, 2);

          if (
            isNaN(inputValueStart) ||
            !/^\d+$/.test(inputValueStart) ||
            inputValueStart < 23 ||
            inputValueStart > 30
          ) {
            setYy("");
            console.log(inputValueStart);
          } else {
            console.log(inputValueStart);
            setYy(inputValueStart);
          }
        }}
      />
    </div>
  );
}
