import React, { useState } from "react";

const Calculator = () => {
  const [data, setData] = useState("");

  const calculation = () => {
    try {
      setData(eval(data));
    } catch {
      setData("error");
    }
  };
  const handleClick = (e) => {
    const value = e.target.value;
    switch (value) {
      case "clear":
        setData(" ");
        break;
      case "equal":
        calculation();
        break;
      default:
        setData(data + value);
    }
  };
  console.log(data);

  return (
    <>
      <div>
        answer:
        <br />
        {data}
      </div>
      <br />
      <div>
        <button onClick={handleClick} value="/">
          /
        </button>
        <button onClick={handleClick} value="%">
          %
        </button>
        <button onClick={handleClick} value="clear">
          C
        </button>
        <br />
        <button onClick={handleClick} value="*">
          *
        </button>
        <button onClick={handleClick} value="9">
          9
        </button>
        <button onClick={handleClick} value="8">
          8
        </button>
        <button onClick={handleClick} value="7">
          7
        </button>
        <br />
        <button onClick={handleClick} value="-">
          -
        </button>
        <button onClick={handleClick} value="6">
          6
        </button>
        <button onClick={handleClick} value="5">
          5
        </button>
        <button onClick={handleClick} value="4">
          4
        </button>
        <br />
        <button onClick={handleClick} value="+">
          +
        </button>
        <button onClick={handleClick} value="3">
          3
        </button>
        <button onClick={handleClick} value="2">
          2
        </button>
        <button onClick={handleClick} value="1">
          1
        </button>
        <br />
        <button onClick={handleClick} value="equal">
          =
        </button>
        <button onClick={handleClick} value="0">
          0
        </button>

        <button onClick={handleClick} value=".">
          .
        </button>
      </div>
    </>
  );
};
export default Calculator;
