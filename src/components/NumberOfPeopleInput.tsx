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

  const handleNumberOfPeopleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    onSetNumberOfPeople(parseInt(value, 10) || 0);
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="number-of-people"
        className="text-sm font-medium text-[#070F2B]"
      >
        Number of People:
      </label>
      <input
        id="number-of-people"
        type="number"
        value={numberOfPeople === 0 ? "" : numberOfPeople.toString()}
        onChange={handleNumberOfPeopleChange}
        min="1"
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        className={`rounded-md p-1 pl-3 h-8 text-xs bg-white/95 text-[#070F2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#535C91] ${
          hasError ? "border border-red-700" : ""
        }`}
      />
      {hasError ? (
        <p id={errorId} className="text-xs text-red-900">
          Must be at least 1 person
        </p>
      ) : null}
    </div>
  );
}
