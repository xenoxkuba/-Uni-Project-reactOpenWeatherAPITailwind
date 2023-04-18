import { useState, useRef } from "react";

const CityInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("Pass a city here...");

  const cityInputRef = useRef();

  const placeHolderHandler = () => {
    setEnteredValue("");
    if (enteredValue === "") {
      setEnteredValue("Pass a city here...");
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    props.onEnteredCity(cityInputRef.current.value);
    cityInputRef.current.value = "";
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <input
        ref={cityInputRef}
        type="text"
        placeholder={enteredValue}
        onClick={placeHolderHandler}
        className="pt-3 pl-3 pb-1 rounded-xl shadow-lg"
      ></input>
    </form>
  );
};

export default CityInput;
