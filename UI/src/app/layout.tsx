import React from 'react';
import type { Metadata } from 'next';
import { Providers } from '../Store/Providers';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Shared/Fonts/fonts.css";
import "../index.css";
import "../App.css";

import Header from "../Main/Navbar";

export const metadata: Metadata = {
  title: 'Mrinal Kasyap | Portfolio',
  description: 'Discover Mrinal Kasyap’s tech skills, career, and blog.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
