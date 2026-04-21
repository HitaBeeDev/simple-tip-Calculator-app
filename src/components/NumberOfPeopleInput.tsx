interface NumberOfPeopleInputProps {
  numberOfPeople: number;
  onSetNumberOfPeople: (value: number) => void;
}

export default function NumberOfPeopleInput({
  numberOfPeople,
  onSetNumberOfPeople,
}: NumberOfPeopleInputProps): JSX.Element {
  const hasError = numberOfPeople === 0;
  const errorId = "number-of-people-error";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSetNumberOfPeople(parseInt(e.target.value, 10) || 0);
  };

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="number-of-people"
        className="text-xs font-medium text-[#b5cbc5] uppercase tracking-wider"
      >
        Number of People
      </label>
      <div
        className={`flex items-center rounded-lg bg-[#3a5650] h-9 overflow-hidden ${
          hasError ? "ring-1 ring-red-400" : ""
        }`}
      >
        <button
          type="button"
          aria-label="Decrease number of people"
          onClick={() => onSetNumberOfPeople(Math.max(1, numberOfPeople - 1))}
          className="w-9 h-full flex items-center justify-center text-[#8faea6] hover:text-white hover:bg-[#4f736b] transition-colors text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8faea6]"
        >
          −
        </button>
        <input
          id="number-of-people"
          type="number"
          value={numberOfPeople === 0 ? "" : numberOfPeople.toString()}
          onChange={handleChange}
          min="1"
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className="flex-1 h-full bg-transparent text-white text-sm text-center focus-visible:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          aria-label="Increase number of people"
          onClick={() => onSetNumberOfPeople(numberOfPeople + 1)}
          className="w-9 h-full flex items-center justify-center text-[#8faea6] hover:text-white hover:bg-[#4f736b] transition-colors text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8faea6]"
        >
          +
        </button>
      </div>
      {hasError ? (
        <p id={errorId} className="text-xs text-red-300">
          Must be at least 1 person
        </p>
      ) : null}
    </div>
  );
}
