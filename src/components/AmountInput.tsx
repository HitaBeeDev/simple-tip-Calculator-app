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
        className="text-xs font-medium text-[#b5cbc5] uppercase tracking-wider"
      >
        Bill
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#8faea6]">
          $
        </span>
        <input
          id={inputId}
          className={`rounded-lg h-9 w-full pl-7 pr-3 bg-[#3a5650] text-white placeholder-[#4f736b] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8faea6] ${
            errorMessage ? "ring-1 ring-red-400" : ""
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
        <p id={errorId} className="text-xs text-red-300">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
