import React from "react";

export default function Button(props) {
  let cardname = props.cardname;
  let cardnum = props.cardnum;
  let mm = props.mm;
  let yy = props.yy;
  let cvc = props.cvc;
  let setRender = props.setRender;
  let handleRender = props.handleRender;

  return (
    <div>
      {" "}
      <button
        className="submitBtn"
        onClick={() => {
          if (
            cardname === "" ||
            cardnum === "" ||
            mm === "" ||
            yy === "" ||
            cvc === ""
          ) {
            setRender(true);
          } else {
            handleRender();
          }
        }}
      >
        Confirm
      </button>
    </div>
  );
}
