import { useState } from "react";
import Title from "./Title";
import AmountInput from "./AmountInput";
import PercentageInput from "./PercentageInput";
import ResultInput from "./ResultInput";
import ResetButton from "./ResetButton";
import NumberOfPeopleInput from "./NumberOfPeopleInput";

function TipCalculator(): JSX.Element {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const numericBill = parseFloat(bill) || 0;
  const safeNumberOfPeople = numberOfPeople || 1;
  const tipAmount = numericBill * (percentage / 100);
  const total = numericBill + tipAmount;
  const perPerson = total / safeNumberOfPeople;
  const isDefaultState =
    bill === "" && percentage === 0 && numberOfPeople === 1;

  const handleSelectPercentage = (value: number) => {
    setPercentage(value);
  };

  function handleReset(): void {
    setBill("");
    setPercentage(0);
    setNumberOfPeople(1);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#4f736b]">
      <div className="flex flex-col lg:flex-row w-full max-w-3xl lg:min-h-[520px] rounded-2xl shadow-2xl overflow-hidden mx-4 my-8">
        <div className="lg:w-[22rem] bg-[#273d38] flex flex-col p-8 gap-6">
          <Title />
          <AmountInput bill={bill} onSetBill={setBill} />

          <PercentageInput
            selectedPercentage={percentage}
            onSelect={handleSelectPercentage}
          />
          <NumberOfPeopleInput
            numberOfPeople={numberOfPeople}
            onSetNumberOfPeople={setNumberOfPeople}
          />
        </div>

        <div className="flex-1 bg-[#e8f0ef] flex flex-col justify-between p-8">
          <ResultInput
            tipAmount={tipAmount}
            total={total}
            perPerson={perPerson}
          />
          <ResetButton onReset={handleReset} disabled={isDefaultState} />
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;
