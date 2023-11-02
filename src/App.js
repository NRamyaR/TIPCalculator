import { Children, useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  const handleReset = () => {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };
  return (
    <div>
      <BillInput bill={bill} onBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onBill }) {
  return (
    <div>
      <label>
        How much was the bill
        <input
          type="text"
          value={bill}
          onChange={(e) => onBill(Number(e.target.value))}
        />
      </label>
    </div>
  );
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisified (0%)</option>
        <option value="10">It was okay (10%)</option>
        <option value="20">It was good (20%)</option>
        <option value="50">It was amazing (50%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <p>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </p>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>RESET</button>;
}
