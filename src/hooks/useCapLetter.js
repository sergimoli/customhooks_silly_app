import { useState } from "react";

export const useCapLetter = (text) => {
  const [myText, setMyText] = useState(text);
  //el paràmetre el posem com a opcional
  const upperCase = (value = "") => {
    // console.log(text + value);
    // return text.toUpperCase();
    setMyText(text.toUpperCase());
  };

  const lowerCase = () => {
    // return text.toLowerCase();
    setMyText(text.toLowerCase());
  };

  const concat = (added) => {
    // return text + added;
    setMyText(text + added);
  };
  return {
    state: myText,
    upperCase,
    lowerCase,
    concat,
  };
};
