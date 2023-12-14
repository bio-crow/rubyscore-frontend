import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from 'next';
import { Inter, Lato } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { ReactNode } from 'react';
import WalletProvider from '@/providers/WalletProvider';
import ToastieContainer from '@/components/common/ToastieContainer/ToastieContainer';
import AuthProvider from '@/providers/AuthProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import AnalyticsProvider from '@/components/common/AnalyticsProvider/AnalyticsProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lato = Lato({ subsets: ['latin'], variable: '--font-lato', weight: ['100', '300', '400', '700'] });
export const metadata: Metadata = {
  title: 'Rubyscore',
  description: 'Rubyscore',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <ThemeRegistry>
        <body className={`${inter.variable} ${lato.variable}`}>
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
