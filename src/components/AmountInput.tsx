interface AmountInputProps {
  bill: string;
  onSetBill: (value: string) => void;
}

function getBillError(bill: string): string {
  const trimmedBill = bill.trim();

  if (trimmedBill === "") {
    return "";
  }

  if (!/^-?\d*(\.\d*)?$/.test(trimmedBill) || trimmedBill === "." || trimmedBill === "-.") {
    return "Enter a valid number.";
  }

  if (parseFloat(trimmedBill) < 0) {
    return "Bill amount cannot be negative.";
  }

  return "";
}

export default function AmountInput({
  bill,
  onSetBill,
}: AmountInputProps): JSX.Element {
  const errorMessage = getBillError(bill);
  const inputId = "bill-amount";
  const errorId = "bill-amount-error";

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={inputId}
        className="lg:text-sm text-xs font-medium text-[#070F2B]"
      >
        Bill
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-[#1B1A55]">
          $
        </span>
        <input
          id={inputId}
          className={`rounded-md h-8 w-full pl-7 pr-2 bg-white/95 text-[#070F2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#535C91] ${
            errorMessage ? "border border-red-700" : ""
          }`}
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          value={bill}
          aria-invalid={errorMessage !== ""}
          aria-describedby={errorMessage ? errorId : undefined}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onSetBill(e.target.value)
          }
        />
      </div>
      {errorMessage ? (
        <p id={errorId} className="text-xs text-red-900">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
