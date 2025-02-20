type InputProp = {
  type?: "text" | "email";
  name?: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
};

const Input = ({
  type = "text",
  name = "",
  placeholder = "",
  required = false,
  minLength = 0,
}: InputProp) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      minLength={minLength}
      className="w-full text-base sm:text-xl bg-linear-90 from-gray-700 to-transparent px-4 py-2 rounded-md shadow-md "
    />
  );
};

export default Input;
