import { useState } from "react";

const predefinedPercentages = [5, 10, 15, 25, 50];

interface PercentageInputProps {
  selectedPercentage: number;
  onSelect: (value: number) => void;
}

export default function PercentageInput({
  selectedPercentage,
  onSelect,
}: PercentageInputProps): JSX.Element {
  const [customPercentage, setCustomPercentage] = useState("");
  const customInputId = "custom-tip-percentage";

  const handlePercentageClick = (value: number) => {
    setCustomPercentage("");
    onSelect(value);
  };

  const handleCustomPercentageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setCustomPercentage(value);
    onSelect(value ? parseFloat(value) : 0);
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={customInputId}
        className="text-xs font-medium text-[#b5cbc5] uppercase tracking-wider"
      >
        Select Tip %
      </label>
      <div className="flex flex-row flex-wrap gap-2">
        {predefinedPercentages.map((percentage) => (
          <button
            type="button"
            aria-label={`Select ${percentage}% tip`}
            className={`text-xs font-semibold rounded-lg w-10 h-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8faea6] focus-visible:ring-offset-1 focus-visible:ring-offset-[#273d38] ${
              customPercentage === "" && selectedPercentage === percentage
                ? "bg-[#8faea6] text-[#162521]"
                : "bg-[#3a5650] text-[#b5cbc5] hover:bg-[#4f736b] hover:text-white"
            }`}
            key={percentage}
            onClick={() => handlePercentageClick(percentage)}
          >
            {percentage}%
          </button>
        ))}

        <input
          id={customInputId}
          type="number"
          placeholder="Custom"
          value={customPercentage}
          onChange={handleCustomPercentageChange}
          min="0"
          max="100"
          step="1"
          className="text-xs rounded-lg bg-[#3a5650] text-white placeholder-[#8faea6] w-20 h-8 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8faea6]"
        />
      </div>
    </div>
  );
}
