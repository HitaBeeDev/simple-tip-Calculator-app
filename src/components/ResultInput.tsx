interface ResultInputProps {
  tipAmount: number;
  total: number;
  perPerson: number;
}

function formatCurrency(value: number): string {
  return Number.isFinite(value) ? `$${value.toFixed(2)}` : "$0.00";
}

export default function ResultInput({
  tipAmount,
  total,
  perPerson,
}: ResultInputProps): JSX.Element {
  return (
    <div className="flex flex-col gap-5" aria-live="polite" aria-atomic="true">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-1">
          <p className="lg:text-sm text-xs font-medium text-[#070F2B]">
            Tip Amount
          </p>
        </div>
        <p className="lg:text-sm text-xs font-medium text-[#070F2B]">
          {formatCurrency(tipAmount)}
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-1">
          <p className="lg:text-sm text-xs font-medium text-[#070F2B]">
            Per Person
          </p>
        </div>
        <p className="lg:text-sm text-xs font-medium text-[#070F2B]">
          {formatCurrency(perPerson)}
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-1">
          <p className="lg:text-sm text-xs font-medium text-[#070F2B]">Total</p>
        </div>
        <p className="lg:text-sm text-xs font-medium text-[#070F2B]">
          {formatCurrency(total)}
        </p>
      </div>
    </div>
  );
}
