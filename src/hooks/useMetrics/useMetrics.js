import { InputElements, weightDefinitions } from '@/utils/calculatorUtils';
import { useCallback, useMemo, useState } from 'react';

export const useMetrics = () => {
  const [info, setInfo] = useState({
    metric: false,
    centimenters: 0,
    kilograms: 0,
    feets: 0,
    inches: 0,
    stones: 0,
    pounds: 0,
  });
  
  const inputs = useMemo(
    () => (info.metric ? InputElements[1] : InputElements[0]),
    [info.metric]
  );

  const handleCheckbox = (payload) => {
    setInfo((prev) => ({ ...prev, metric: payload }));
  };

  const handleChange = ({ target, name }) => {
    setInfo((prev) => ({ ...prev, [name]: target }));
    console.log(target,"handleChange")
  };


  const calculateIdealWeightRange = () => {
    const height = info.metric
      ? info.centimenters
      : transformToMetric().centimenters;
    const idealWeightLower = 18.5 * (height / 100) ** 2;
    const idealWeightUpper = 24.9 * (height / 100) ** 2;

    return `${idealWeightLower.toFixed(2)}kgs - ${idealWeightUpper.toFixed(2)}kgs`;
  };

  const calculateBMI = (data) => {
    const { centimenters, kilograms } = data;
    const heightInMeters = centimenters / 100;

    const bmi = kilograms / (heightInMeters * heightInMeters);

    return bmi;
  };

  const transformToMetric = useCallback(() => {
    const kilogramsStones = info.stones * 6.35029;
    const kilogramsPounds = info.pounds * 0.45359237;
    const centimetersInches = info.inches * 2.54;
    const centimetersFeet = info.feets * 30.48;
    return {
      kilograms: kilogramsStones + kilogramsPounds,
      centimenters: centimetersInches + centimetersFeet,
    };
  }, [info]);

  const bmiIndicator = useMemo(
    () => calculateBMI(info.metric ? info : transformToMetric()) || 0,
    [info, transformToMetric]
  );

  const bmiText = useMemo(() => {
    return `Your BMI suggests you’re a ${weightDefinitions(
      bmiIndicator
    )}. Your ideal weight is between`;
  }, [bmiIndicator]);

  return {
    inputs,
    handleChange,
    info,
    handleCheckbox,
    bmiIndicator,
    bmiText,
    calculateIdealWeightRange
  };
};
