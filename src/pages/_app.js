
import React from 'react';
import { ThemeProvider } from '@/components/context/ThemeContext';
import { SidebarProvider } from '@/context1/SidebarContext';
import Layout from '@/components/Layout'; // Import the Layout component
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SidebarProvider>
    </ThemeProvider>
  );
}
