import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from 'next';
import { Inter, Lato, Michroma } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { ReactNode } from 'react';
import WalletProvider from '@/providers/WalletProvider';
import ToastieContainer from '@/components/common/ToastieContainer/ToastieContainer';
import AuthProvider from '@/providers/AuthProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import AnalyticsProvider from '@/components/common/AnalyticsProvider/AnalyticsProvider';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lato = Lato({ subsets: ['latin'], variable: '--font-lato', weight: ['100', '300', '400', '700'] });
const michroma = Michroma({ subsets: ['latin'], variable: '--font-michroma', weight: ['400'] });
// const montserratAlt = Montserrat_Alternates({
//   subsets: ['latin'],
//   variable: '--font-montserrat-alt',
//   weight: ['600'],
// });
const montserratAlt = localFont({
  src: [
    {
      path: '../public/asserts/fonts/MontserratAlt1-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/asserts/fonts/MontserratAlt1-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat-alt',
});

export const metadata: Metadata = {
  title: 'Rubyscore',
  description: 'Rubyscore',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <ThemeRegistry>
        <body className={`${inter.variable} ${lato.variable} ${michroma.variable} ${montserratAlt.variable}`}>
          <WalletProvider>
            <AuthProvider>
              {children}
              <AnalyticsProvider />
              <SpeedInsights />
            </AuthProvider>
          </WalletProvider>
          <ToastieContainer />
        </body>
      </ThemeRegistry>
    </html>
  );
}
