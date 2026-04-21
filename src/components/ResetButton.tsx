interface ResetButtonProps {
  onReset: () => void;
  disabled: boolean;
}

export default function ResetButton({
  onReset,
  disabled,
}: ResetButtonProps): JSX.Element {
  return (
    <div className="flex justify-end mt-8">
      <button
        type="button"
        className={`text-sm font-semibold px-6 h-9 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f736b] focus-visible:ring-offset-2 ${
          disabled
            ? "bg-[#d1e1de] text-[#8faea6] cursor-not-allowed"
            : "bg-[#8faea6] text-white hover:bg-[#4f736b]"
        }`}
        onClick={onReset}
        disabled={disabled}
      >
        Reset
      </button>
    </div>
  );
}
