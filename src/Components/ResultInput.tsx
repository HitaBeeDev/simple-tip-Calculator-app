type ResultInputProps = {
  total: number;
  perPerson: number;
};

export default function ResultInput({
  total,
  perPerson,
}: ResultInputProps): JSX.Element {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-1">
          <p className="lg:text-sm text-xs font-medium text-[#1B1A55]">
            Bill Amount
          </p>
          <p className="text-xs font-normal text-[#535C91]">/ Per Person</p>
        </div>
        <p className="lg:text-sm text-xs font-medium text-[#070F2B]">
          ${perPerson.toFixed(2)}
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-1">
          <p className="lg:text-sm text-xs font-medium text-[#1B1A55]">Total</p>
        </div>
        <p className="lg:text-sm text-xs font-medium text-[#070F2B]">
          ${total.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
