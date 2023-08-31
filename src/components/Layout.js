"use client";

// Layout.js


import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '@/components/context/ThemeContext'
import { SidebarContext } from '@/context1/SidebarContext';
import Sidebar from '@/components/Sidebar'

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div className={`layout ${theme}`}>
     
      {isSidebarOpen && <Sidebar />}
      <main>
       

        {children}

        </main>
    </div>
  );
};

export default Layout;
// ------------------------------------------------------------








