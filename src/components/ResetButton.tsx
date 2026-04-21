interface ResetButtonProps {
  onReset: () => void;
  disabled: boolean;
}

export default function ResetButton({
  onReset,
  disabled,
}: ResetButtonProps): JSX.Element {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className={`lg:text-sm text-xs transition-all duration-300 w-32 h-8 rounded-lg text-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1A55] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
          disabled
            ? "bg-[#9290C3]/50 text-[#1B1A55]/50 cursor-not-allowed"
            : "hover:text-[#F0F3FF] hover:bg-[#535C91] bg-[#9290C3] text-[#1B1A55]"
        }`}
        onClick={onReset}
        disabled={disabled}
      >
        Reset
      </button>
    </div>
  );
}
