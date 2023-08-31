import React from 'react';

export const Checkbox = ({ isChecked, label, handleChange }) => {
  return (
    <div
      className="flex items-center gap-4 cursor-pointer"
      onClick={() => handleChange(label === 'Metric')}
    >
      <div
        className={`border rounded-full border-gray-300 w-8 h-8 flex items-center justify-center ${
          isChecked ? 'bg-blue-500 border-blue-500' : ''
        }`}
      >
        {isChecked && (
          <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
        )}
      </div>
      <p className="text-blue-500 text-xl font-semibold">{label}</p>
    </div>
  );
};
