import { useState } from "react";
import Header from "./component/Header";
import Field from "./component/Field";

function App() {
  const [binary, setBinary] = useState();
  const [decimal, setDecimal] = useState();

  const binaryToDecimal = (binary) => {
    let result = 0;
    for (var i = binary.toString().length; i >= 0; i--) {
      result +=
        binary.toString().charAt(binary.toString().length - 1 - i) *
        Math.pow(2, i);
    }
    setDecimal(result);
  };

  const decimalToBinary = (decimal) => {
    var result = "";
    if (decimal == 0) {
      result = "0";
    } else {
      while (decimal > 0) {
        var temp = decimal % 2;
        decimal = Math.floor(decimal / 2);
        result = temp.toString() + result;
        console.log(temp, result);
      }
    }
    if (decimal === "") setBinary(binary);
    else setBinary(result);
  };

  return (
    <div className="container">
      <Header />
      <Field
        lbl="Binary"
        ph="Binary Equivalent"
        value={binary}
        onChange={binaryToDecimal}
      />
      <Field
        lbl="Decimal"
        ph="Decimal Equivalent"
        value={decimal}
        onChange={decimalToBinary}
      />
    </div>
  );
}

export default App;
