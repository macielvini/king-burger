import React from "react";

function TextInput({ type, label, placeholder, name, handler, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="p-3 bg-transparent border-gray-400 border-[1px] rounded-lg focus:outline-none focus:border-white"
        onChange={handler}
        {...rest}
      />
    </div>
  );
}

export default TextInput;
