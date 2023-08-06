import React from "react";
import { useCapLetter } from "../hooks/useCapLetter";

function TestComponent() {
  //aquí posem els returns que hi ha a useCapLetter...
  // const { upperCase, lowerCase, concat } = useCapLetter("sergimolinasaiza");
  // const [myText, setMyText] = useState("sergi molina");
  // const { upperCase, lowerCase, concat } = useCapLetter(myText);

  //ara estem cridat a un hook que em retorna certes variables. la funcionalitat està fora del compoment per a que estigui més net.
  const { state, upperCase, lowerCase, concat } = useCapLetter("sergi");

  // upperCase("hi!");
  // console.log(upperCase());
  // console.log(lowerCase());
  // console.log(concat("teto"));

  return (
    <div>
      <h1>testing personalized components</h1>
      {/* {upperCase()} */}
      {/* {myText} */}
      <h2>{state}</h2>

      <button
        // onClick={(e) => {
        //   setMyText(upperCase());
        // }}
        onClick={upperCase}
      >
        write in uppercase
      </button>
      <button onClick={lowerCase}>write in lowercase</button>
      <button onClick={() => concat(" c a c a")}>concat</button>
    </div>
  );
}

export default TestComponent;
