
import Image from 'next/image';
import db from '../utils/db.json';
import React from 'react';


const HealthPage = () => {
  return (
    <div className='bg-gradient-to-bl from-gray-900 to-gray-600 w-full'>
      <h1 className='text-2xl  font-bold text-center mr-2 text-stone-100 md:mr-10 md:text-3xl'>
      5 Simple Rules for Amazing Health
            </h1>

      {db.healthRemedies.map((remedy, index) => (
        <div
          key={index}
          className='flex flex-col border-b-2 border-blue-900 hover:border-blue-300 md:flex-row'
        >
          <div className='flex-none gap-4 ml-0 mt-10  md:ml-10 md:mt-28 md:mb-24'>
            <Image src={remedy.image} alt={remedy.title} width={500} height={400} className='rounded-3xl shadow-md shadow-orange-100' />
          </div>

          {/* <div className='flex-grow gap-4 p-4 text-white'>
            <h1 className='text-2xl font-bold p-4 text-stone-100'>{remedy.title}</h1>
            <p className='font-mono overflow-auto'>{remedy.content}</p>
          </div> */}
          <div className='fit-to-screen flex-grow gap-4 p-4 text-white'>
  <h1 className='text-2xl font-bold p-4 text-stone-100'>{remedy.title}</h1>
  <p className='font-mono overflow-auto max-w-4xl mx-auto'>{remedy.content}</p>
</div>
        </div>
      ))}
    </div>
  );
};

export default HealthPage;



