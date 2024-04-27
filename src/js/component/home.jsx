import React from "react";
import SimpleCounter from "./SimpleCounter";
//include images into your bundle

//create your first component
const Home = (props) => {
  function calculateSeconds(aCounter, PlaceValue) {
    console.log(aCounter);
    console.log(PlaceValue);
    return Math.floor(aCounter / PlaceValue) % 10;
  }
  return (
    <div>
      <SimpleCounter
        hundredThousandsDigit={calculateSeconds(props.counter, 100000)}
        tenhousandsDigit={calculateSeconds(props.counter, 10000)}
        thousandsDigit={calculateSeconds(props.counter, 1000)}
        hundredsDigit={calculateSeconds(props.counter, 100)}
        tensDigit={calculateSeconds(props.counter, 10)}
        onesDigit={calculateSeconds(props.counter, 1)}
      />
    </div>
  );
};

export default Home;
