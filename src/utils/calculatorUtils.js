export const InputElements = [
  {
    id: 'imperial',
    height: [
      {
        id: 'imperial1',
        name: 'feets',
        placeholder: '0',
        label: 'ft',
      },
      {
        id: 'imperial2',
        name: 'inches',
        placeholder: '0',
        label: 'in',
      },
    ],
    weight: [
      {
        id: 'imperial3',
        name: 'stones',
        placeholder: '0',
        label: 'st',
      },
      {
        id: 'imperial4',
        name: 'pounds',
        placeholder: '0',
        label: 'lbs',
      },
    ],
  },
  {
    id: 'metric',
    height: [
      {
        id: 'metric1',
        name: 'centimenters',
        placeholder: '0',
        label: 'cm',
      },
    ],
    weight: [
      {
        id: 'metric3',
        name: 'kilograms',
        placeholder: '0',
        label: 'kg',
      },
    ],
  },
];

export const weightDefinitions = (bmi) => {
  if (bmi === 0) {
    return;
  } else if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Healthy weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'Overweight';
  } else if (bmi > 30) {
    return 'Obese';
  }
};
