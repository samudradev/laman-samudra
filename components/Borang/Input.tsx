interface InputProps {
  label: string;
  error?: string;
}

const Input: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, error, ...props }) => {
  const friendlyId = encodeURIComponent(label);
  return (
    <div className="flex flex-col w-full gap-4 items-stretch">
      <label
        htmlFor={friendlyId}
        className="text-zinc-700 w-32 text-left hidden"
      >
        {label}
      </label>
      <input
        id={friendlyId}
        className="border border-zinc-300 rounded-lg px-4 py-2 flex-1"
        placeholder={label}
        {...props}
      />
      {error && <p className="text-ps4-text-alert">{error}</p>}
    </div>
  );
};

export default Input;
