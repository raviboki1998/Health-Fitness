import React, { useState } from 'react';

export const NumbericInput = ({ onChange, label, ...props }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange({ target: { value: e.target.value, name: props.name } });
  };

  return (
    <div className="rounded-lg border border-gray-300 bg-white p-5 flex space-x-4 max-w-xs">
      <input
        {...props}
        className="outline-none border-none min-h-[30px] text-gunmetal text-xl font-semibold w-full"
        type="text"
        inputMode="numeric"
        value={inputValue}
        onChange={handleChange}
      />
      <p className="text-blue-500 text-xl font-semibold">{label}</p>
    </div>
  );
};
