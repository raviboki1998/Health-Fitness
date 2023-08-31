


// import Head from 'next/head';
// import BloodPressureCalculator from '../components/BloodPressureCalculator';

// export default function Blood() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
//       <Head>
//         <title>Blood Pressure Calculator</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <BloodPressureCalculator />
//     </div>
//   );
// }



import Head from 'next/head';
import BloodPressureCalculator from '../components/BloodPressureCalculator';

export default function Blood() {
  return (
    <div className=" bg-white rounded shadow-md w-full  md:max-h-80 max-w-md">
      <Head>
        <title>Blood Pressure Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BloodPressureCalculator />
    </div>
  );
}




