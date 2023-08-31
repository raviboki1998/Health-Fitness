import React from 'react';
import { Checkbox } from '../checkbox/Checkbox';
import { useMetrics } from '@/hooks/useMetrics/useMetrics';
import { NumbericInput } from '../numericInput/NumbericInput';

export const Calculator = () => {
  const {
    info,
    handleChange,
    inputs,
    handleCheckbox,
    bmiIndicator,
    bmiText,
    calculateIdealWeightRange,
  } = useMetrics();

  return (
    <div className="bg-white shadow-lg rounded-lg w-full h-full p-6 flex flex-col space-y-6">
      <h2 className="font-semibold text-2xl text-blue-900">
        Enter your details below
      </h2>
      <div className="flex space-x-6">
        <Checkbox
          handleChange={handleCheckbox}
          label="Metric"
          isChecked={info.metric}
        />
        <Checkbox
          handleChange={handleCheckbox}
          label="Imperial"
          isChecked={!info.metric}
        />
      </div>
      <div className={`flex flex-col space-y-6 ${info.metric ? 'flex-row' : ''}`}>
        <div className="flex flex-col space-y-2">
          <span className="text-blue-500 text-sm font-medium">Height</span>
          <div className="flex space-x-4">
            {inputs.height.map((input) => (
              <NumbericInput
                key={input.id}
                placeholder={input.placeholder}
                name={input.name}
                label={input.label}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-blue-500 text-sm font-medium">Weight</span>
          <div className="flex space-x-4">
            {inputs.weight.map((input) => (
              <NumbericInput
                key={input.id}
                placeholder={input.placeholder}
                name={input.name}
                label={input.label}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg p-8 space-y-4 max-h-60 overflow-hidden">
  {bmiIndicator === 0 ? (
    <div className="flex flex-col space-y-2 text-white">
      <h2 className="text-xl font-semibold">Welcome</h2>
      <p>
        Enter your height and weight and you’ll see your BMI result here
      </p>
    </div>
  ) : (
    <div className="flex flex-col space-y-4 text-white">
      <div className="flex flex-col space-y-2">
        <h3 className="text-base font-semibold">Your BMI is...</h3>
        <h1 className="text-6xl font-semibold">
          {bmiIndicator.toFixed(1)}
        </h1>
      </div>
      <div className="text-sm">
        <p>
          {bmiText}
          <em className="font-semibold">{calculateIdealWeightRange()}</em>
        </p>
      </div>
    </div>
  )}
</div>

    </div>
  );
};
