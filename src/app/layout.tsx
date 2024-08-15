import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import logo from '../../public/icons/logo.png';
import '../styles/globals.css';
import Navigation from '@/components/organisms/navigation/navigation/Navigation';
import RecoilRootWrapper from '@/recoil/recoilRootWrapper';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-main-background'>
      <body className='flex justify-center'>
        <RecoilRootWrapper>
          <figure className='hidden tablet:flex tablet:h-screen tablet:items-center tablet:pr-[216px] transition-opacity duration-500 ease-in-out opacity-0 tablet:opacity-100'>
            <Image className='w-419 h-198 object-contain ' src={logo} alt='logo' />
          </figure>
          {children}
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
