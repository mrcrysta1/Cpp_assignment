import React, { useState } from "react";
import Layout from "../components/Layout";

function CalcT1() {
  const [operator, setOperator] = useState("");
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [result, setResult] = useState("");

  const calculation = () => {
    var value1 = parseInt(operand1);
    var value2 = parseInt(operand2);

    let calculationResult = 0;
    if (operator === "+") {
      calculationResult = value1 + value2;
    }

    if (operator === "-") {
      calculationResult = value2 - value1;
    }

    if (operator === "*") {
      calculationResult = value1 * value2;
    }

    if (operator === "/") {
      calculationResult = value1 / value2;
    }
    setResult("Your Answer is: "+calculationResult);
  };
  return (
    <Layout>
      <h1>Task 1</h1>
<div className="container">

      <form class="row g-3">
        <div class="col-md-6">
          <div className="input-group">
            <input
              type="text"
              value={operator}
              placeholder="Select operator + - x /"
              name="operator"
              onChange={(e) => setOperator(e.target.value)}
              class="form-control"
            />
            <input
              type="number"
              value={operand1}
              placeholder="Enter a number 1"
              name="operand1"
              onChange={(e) => setOperand1(e.target.value)}
              class="form-control"
            />
            <input
              type="number"
              value={operand2}
              placeholder="Enter a number 2"
              name="operand2"
              onChange={(e) => setOperand2(e.target.value)}
              class="form-control"
            />
          </div>
        </div>
        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
            onClick={calculation}
            >
            Calulate
          </button>
        </div>
      </form>

      <h3>{result}</h3>
              </div>
    </Layout>
  );
}

export default CalcT1;
