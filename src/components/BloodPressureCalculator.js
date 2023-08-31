

// -----------------------------------------main--------------


import React, { useState } from 'react';

const BloodPressureCalculator = () => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const sys = parseFloat(systolic);
    const dia = parseFloat(diastolic);

    if (!isNaN(sys) && !isNaN(dia)) {
      if (sys < 90 || sys > 200 || dia < 60 || dia > 120) {
        setResult('Invalid range');
      } else if (sys >= 140 || dia >= 90) {
        setResult('High Blood Pressure');
      } else if (sys >= 120 || dia >= 80) {
        setResult('Prehypertension');
      } else {
        setResult('Normal Blood Pressure');
      }
    } else {
      setResult('Please enter valid numbers');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md justify-center ">
      <h2 className="text-lg font-semibold mb-4">Blood Pressure Calculator</h2>
      <div className="mb-2">
        <label className="block text-sm font-medium">Systolic Pressure (mmHg)</label>
        <input
          type="number"
          placeholder='Systolic'
          className="border rounded p-2 w-full"
          value={systolic}
          onChange={(e) => setSystolic(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Diastolic Pressure (mmHg)</label>
        <input
          type="number"
          placeholder='Diastolic'
          className="border rounded p-2 w-full"
          value={diastolic}
          onChange={(e) => setDiastolic(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white rounded p-2 mt-2"
        onClick={calculate}
      >
        Calculate
      </button>
      <div className="mt-4">
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
};

export default BloodPressureCalculator;


// ---------------------------------mobile-----------------
// import React, { useState } from 'react';

// const BloodPressureCalculator = () => {
//   const [systolic, setSystolic] = useState('');
//   const [diastolic, setDiastolic] = useState('');
//   const [result, setResult] = useState('');

//   const calculate = () => {
//     const sys = parseFloat(systolic);
//     const dia = parseFloat(diastolic);

//     if (!isNaN(sys) && !isNaN(dia)) {
//       if (sys < 90 || sys > 200 || dia < 60 || dia > 120) {
//         setResult('Invalid range');
//       } else if (sys >= 140 || dia >= 90) {
//         setResult('High Blood Pressure');
//       } else if (sys >= 120 || dia >= 80) {
//         setResult('Prehypertension');
//       } else {
//         setResult('Normal Blood Pressure');
//       }
//     } else {
//       setResult('Please enter valid numbers');
//     }
//   };

//   return (
//    <div className="p-4 bg-white rounded shadow-md w-full max-w-md">
//       <h2 className="text-lg font-semibold mb-4">Blood Pressure Calculator</h2>
//       <div className="mb-2">
//         <label className="block text-sm font-medium">Systolic Pressure (mmHg)</label>
//         <input
//           type="number"
//           className="border rounded p-2 w-full sm:w-1/2"
//           placeholder="Systolic"
//           value={systolic}
//           onChange={(e) => setSystolic(e.target.value)}
//         />
//       </div>
//       <div className="mb-2">
//         <label className="block text-sm font-medium">Diastolic Pressure (mmHg)</label>
//         <input
//           type="number"
//           className="border rounded p-2 w-full sm:w-1/2"
//           placeholder="Diastolic"
//           value={diastolic}
//           onChange={(e) => setDiastolic(e.target.value)}
//         />
//       </div>
//       <button
//         className="bg-blue-500 text-white rounded p-2 w-full sm:w-auto"
//         onClick={calculate}
//       >
//         Calculate
//       </button>
//       <div className="mt-4">
//         <strong>Result:</strong> {result}
//       </div>
//     </div>
//   );
// };

// export default BloodPressureCalculator;


