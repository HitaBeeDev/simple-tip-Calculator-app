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
    <div>
      <label
        htmlFor={customInputId}
        className="lg:text-sm text-xs font-medium text-[#070F2B]"
      >
        Select Tip %
      </label>
      <div className="flex flex-row flex-wrap gap-3 mt-2">
        {predefinedPercentages.map((percentage) => (
          <button
            type="button"
            aria-label={`Select ${percentage}% tip`}
            className={`lg:text-sm text-xs font-medium rounded-md border-2 w-12 h-6 lg:w-16 lg:h-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1A55] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
              customPercentage === "" && selectedPercentage === percentage
                ? "bg-[#535C91] border-[#535C91] text-[#F0F3FF]"
                : "text-[#1B1A55] border-[#535C91] hover:text-[#070F2B] hover:border-[#535C91] hover:bg-[#b7b5dc]"
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
          placeholder="Custom %"
          value={customPercentage}
          onChange={handleCustomPercentageChange}
          min="0"
          max="100"
          step="1"
          className="lg:text-sm text-xs rounded-md border-2 border-[#535C91] bg-white/95 text-[#070F2B] w-28 h-8 text-center p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#535C91]"
        />
      </div>
    </div>
  );
}
