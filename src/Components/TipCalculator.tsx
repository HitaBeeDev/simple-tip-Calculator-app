import { useState } from "react";
import Title from "./Title";
import AmountInput from "./AmountInput";
import PercentageInput from "./PercentageInput";
import ResultInput from "./ResultInput";
import ResetButton from "./ResetButton";
import NumberOfPeopleInput from "./NumberOfPeopleInput";
import backgroundImage from "../assets/b3.jpg";

function TipCalculator(): JSX.Element {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const numericBill = parseFloat(bill) || 0;
  const tip = numericBill * (percentage / 100);
  const total = (numericBill + tip) * numberOfPeople;
  const perPerson = total / numberOfPeople;
  const tipAmount = tip / numberOfPeople;

  const handleSelectPercentage = (value: number) => {
    setPercentage(value);
  };

  function handleReset(): void {
    setBill("");
    setPercentage(0);
    setNumberOfPeople(1);
  }

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:w-1/2 w-11/12 p-5 mx-auto rounded-xl shadow-xl bg-white/10 backdrop-blur-lg">
        <Title />

        <div className="lg:grid lg:grid-cols-2 lg:gap-10 gap-5 flex flex-col lg:-mt-5">
          <div className="flex flex-col gap-5 lg:p-5 p-1">
            <AmountInput bill={bill} onSetBill={setBill} />
            <PercentageInput onSelect={handleSelectPercentage} />
            <NumberOfPeopleInput
              numberOfPeople={numberOfPeople}
              onSetNumberOfPeople={setNumberOfPeople}
            />
          </div>

          <div className="bg-[#9290C3] h-44 lg:h-full bg-opacity-50 flex flex-col justify-between rounded-xl shadow-xl lg:p-10 p-6 backdrop-blur-lg">
            <ResultInput
              tipAmount={tipAmount}
              total={total}
              perPerson={perPerson}
            />
            <ResetButton onReset={handleReset} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;
