import { useState } from "react";

const predefinedPercentages = [5, 10, 15, 25, 50];

type PercentageInputProps = {
  onSelect: (value: number) => void;
};

export default function PercentageInput({
  onSelect,
}: PercentageInputProps): JSX.Element {
  const [customPercentage, setCustomPercentage] = useState("");

  const handlePercentageClick = (value: number) => {
    onSelect(value);
  };

  const handleCustomPercentageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setCustomPercentage(value);
    if (value) {
      onSelect(parseFloat(value));
    }
  };

  return (
    <div>
      <label className="lg:text-sm text-xs font-medium text-[#1B1A55]">
        Select Tip %
      </label>
      <div className="flex flex-row flex-wrap gap-3 mt-2">
        {predefinedPercentages.map((percentage) => (
          <button
            type="button"
            className="lg:text-sm text-xs hover:text-[#070F2B] hover:border-[#535C91] hover:bg-[#9290C3] text-[#535C91] font-medium rounded-md border-2 border-[#9290C3] w-12 h-6 lg:w-16 lg:h-8"
            key={percentage}
            onClick={() => handlePercentageClick(percentage)}
          >
            {percentage}%
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom %"
          value={customPercentage}
          onChange={handleCustomPercentageChange}
          min="0"
          max="100"
          step="1"
          className="lg:text-sm text-xs rounded-md border-2 border-[#9290C3] w-28 h-8 text-center p-1"
        />
      </div>
    </div>
  );
}
