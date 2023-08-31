// 'use strict';
// import Image from 'next/image';
// import React, { useEffect, useMemo, useState } from 'react';
// import styles from './Hero.module.css';
// import { Calculator } from '@/components';
// import { useWidth } from '@/hooks';

// const Hero = () => {
//   const { imgMeasurement } = useWidth();
//   return (
//     <section id="hero" className={styles.hero}>
//       <nav className={styles.hero__nav}>
//         <Image
//           src="/logo.svg"
//           alt="logo"
//           width={imgMeasurement}
//           height={imgMeasurement}
//         />
//       </nav>
//       <div className={styles.hero__content}>
//         <div className={styles.hero__headers}>
//           <h1 className={styles['hero__headers--title']}>
//             Body Mass Index Calculator
//           </h1>
//           <h1 className={styles['hero__headers--subtitle']}>
//             Better understand your weight in relation to your height using our
//             body mass index (BM) calculator. While BMI is not the sole
//             determinant of a healthy weight, it offers a valuable starting point
//             to evaluate your overall health and well-being.
//           </h1>
//         </div>
//         <Calculator />
//       </div>
//     </section>
//   );
// };

// export { Hero };


// ----------------


import React from 'react';
import { useWidth } from '@/hooks';
import { Calculator } from '@/components/calculator/calculator';

const Hero = () => {
  const { imgMeasurement } = useWidth();

  return (
    <section id="hero" className="bg-gray-100">
      <nav className="w-40 h-40">
        {/* <img
          src="/logo.svg"
          alt="logo"
          width={imgMeasurement}
          height={imgMeasurement}
          className="object-contain"
        /> */}
      </nav>
      <div className="flex flex-col items-center px-4 py-8 md:px-24 md:flex-row md:py-16">
        <div className="md:w-1/2 md:mr-12">
          <div className="max-w-lg">
            <h1 className="text-4xl font-semibold text-center md:text-left text-blue-900">
              Body Mass Index Calculator
            </h1>
            <p className="mt-4 text-base leading-relaxed text-center text-blue-700 md:text-left">
              Better understand your weight in relation to your height using our
              body mass index (BMI) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting point
              to evaluate your overall health and well-being.
            </p>
          </div>
        </div>
        <Calculator />
      </div>
    </section>
  );
};

export { Hero };

