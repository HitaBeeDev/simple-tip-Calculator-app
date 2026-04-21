interface NumberOfPeopleInputProps {
  numberOfPeople: number;
  onSetNumberOfPeople: (value: number) => void;
}

export default function NumberOfPeopleInput({
  numberOfPeople,
  onSetNumberOfPeople,
}: NumberOfPeopleInputProps): JSX.Element {
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
        className="text-sm font-medium text-[#1B1A55]"
      >
        Number of People:
      </label>
      <input
        id="number-of-people"
        type="number"
        value={numberOfPeople === 0 ? "" : numberOfPeople.toString()}
        onChange={handleNumberOfPeopleChange}
        min="1"
        className="rounded-md p-1 pl-3 h-8 text-xs"
      />
    </div>
  );
}
