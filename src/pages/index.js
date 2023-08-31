/* eslint-disable @next/next/no-img-element */




// Home.js
// import React from 'react';
// import BaseLayout from '../components/BaseLayout';
// import DashboardCard from '../components/DashboardCard'; 


// const Home = () => {
//   return (
//     <BaseLayout>
//       <div className="dashboard">
//         <DashboardCard title="Card 1" content="Content for Card 1" />
//         <DashboardCard title="Card 2" content="Content for Card 2" />
//       </div>
//     </BaseLayout>
//   );
// };

// export default Home;

// ---------------------------
"use client";


import React from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook
import BaseLayout from '../components/BaseLayout';
import DashboardCard from '../components/DashboardCard';
import { useState,useEffect } from 'react';
import { useTheme } from 'next-themes';

const Home = () => {
  const router = useRouter(); // Initialize the router
const {theme,setTheme}=useTheme();
const [mounted,setMounted]=useState(false);
useEffect(()=>{
  setMounted(true);
},[])
if(!mounted)return null;
const currentTheme=theme ==='system' ? systemTheme :theme;
  // Define a function to handle card clicks and redirect
  const handleCardClick = (page) => {
    router.push(page); // Redirect to the specified page
  };

  return (
    <BaseLayout>
      <div className="dashboard snap-y mt-16">
            <div  className='fitness'>
                  <DashboardCard
                        title="Fitness"
                        content="Content for Card 1"
                        onClick={() => handleCardClick('/fitness')} // Redirect to the fitness page 
                      />
            </div>
            <div className='health'>
                    <DashboardCard
                          title="Health"
                          content="Content for Card 2"
                          onClick={() => handleCardClick('/health')} // Redirect to the fitness page 
                        />
            </div>
              <div className='body'>
                    <DashboardCard
                        title="Body"
                        content="Content for Card 3"
                        onClick={() => handleCardClick('/body')} // Redirect to the body page
                      />
              </div>
              <div className='blood'>
                    <DashboardCard
                        title="Blood"
                        content="Content for Card 4"
                        onClick={() => handleCardClick('/blood')} // Redirect to the body page
                      />
              </div>
              <div className='stomach'>
                    <DashboardCard
                        title="Stomach"
                        content="Content for Card 5"
                        onClick={() => handleCardClick('/stomach')} // Redirect to the body page
                      />
              </div>
              <div className='hair'>
                    <DashboardCard
                        title="Hair"
                        content="Content for Card 6"
                        onClick={() => handleCardClick('/hair')} // Redirect to the body page
                      />
              </div>
              <div className='obesity'>
                    <DashboardCard
                        title="Obesity"
                        content="Content for Card 7"
                        onClick={() => handleCardClick('/Obesity')} // Redirect to the body page
                      />
              </div>
              <div className='gastric'>
                    <DashboardCard
                        title="Gastric"
                        content="Content for Card 8"
                        onClick={() => handleCardClick('/Gastric')} // Redirect to the body page
                      />
              </div>
              <div className='sugar'>
                    <DashboardCard
                        title="Sugar Diabetes"
                        content="Content for Card 9"
                        onClick={() => handleCardClick('/sugar')} // Redirect to the body page
                      />
              </div>
              <div className='whitehair'>
                    <DashboardCard
                        title="White hairs"
                        content="Content for Card 10"
                        onClick={() => handleCardClick('/whiteHair')} // Redirect to the body page
                      />
              </div>
              <div className='heart'>
                    <DashboardCard
                        title="Heart"
                        content="Content for Card 11"
                        onClick={() => handleCardClick('/heart')} // Redirect to the body page
                      />
              </div>
      
        {/* Add more DashboardCard components as needed */}
      </div>

      
    </BaseLayout>
  );
};

export default Home;


