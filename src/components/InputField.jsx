/* eslint-disable react/prop-types */
const InputField = ({ name, label, type = "text", value, onChange, error }) => {
  return (
    <div className="space">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && (
        <div className="text-black bg-red-200 p-2 rounded-md text-base">
          {error}
        </div>
      )}
    </div>
  );
};

export default InputField;
