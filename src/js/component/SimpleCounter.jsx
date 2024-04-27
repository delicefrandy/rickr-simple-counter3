import React from "react";
const SimpleCounter = (props) => {
  return (
    <div className="counter-display">
      <div className="clock-img">
        <i class="fa-regular fa-clock"></i>
      </div>
      <div className="container-clock">
        <div className="seconds hundred-thousands">
          {props.hundredThousandsDigit}
        </div>
        <div className="seconds ten-thousands">{props.tenhousandsDigit}</div>
        <div className="seconds thousands">{props.thousandsDigit}</div>
        <div className="seconds hundreds">{props.hundredsDigit}</div>
        <div className="seconds tens">{props.tensDigit}</div>
        <div className="seconds ones">{props.onesDigit}</div>
      </div>
    </div>
  );
};

export default SimpleCounter;
