type Props = {
    label: string;
    name: string;
    placeholder: string;
    id?: string;
    error?: string;
    type?: "email" | "password" | "text" | "date";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
}

const InputLabel = ({label,name,placeholder,id,error,type, onChange, value}: Props) => {
  return (
    <div className="mb-4">
      <label
        className="block text-sm font-bold  text-white"
        htmlFor="email"
      >
        Your {label}
      </label>

      <input
        className="shadow bg-gray-600 appearance-none border rounded w-64 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        name={name}
        type={type ?? "text"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <small className="text-red-600 flex ">{error}</small>}
      
    </div>
  );
};

export default InputLabel;
