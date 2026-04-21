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
    <div aria-live="polite" aria-atomic="true">
      <p className="text-xs font-semibold text-[#4f736b] uppercase tracking-widest mb-6">
        Overview
      </p>

      <div className="mb-6">
        <p className="text-xs font-medium text-[#4f736b] uppercase tracking-wider mb-1">
          Per Person
        </p>
        <p className="text-3xl sm:text-4xl font-bold text-[#273d38]">
          {formatCurrency(perPerson)}
        </p>
      </div>

      <div className="h-px bg-[#d1e1de] mb-6" />

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-[#4f736b]">Tip Amount</p>
          <p className="text-base font-semibold text-[#273d38]">
            {formatCurrency(tipAmount)}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-[#4f736b]">Total</p>
          <p className="text-base font-semibold text-[#273d38]">
            {formatCurrency(total)}
          </p>
        </div>
      </div>
    </div>
  );
}
