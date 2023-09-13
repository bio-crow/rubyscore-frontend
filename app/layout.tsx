import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from 'next';
import { Inter, Lato } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { ReactNode } from 'react';
import WalletProvider from '@/providers/WalletProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lato = Lato({ subsets: ['latin'], variable: '--font-lato', weight: ['100', '300', '400', '700'] });
export const metadata: Metadata = {
  title: 'Ruby Score',
  description: 'Ruby Score',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <ThemeRegistry>
        <body className={`${inter.variable} ${lato.variable}`}>
          <WalletProvider>{children}</WalletProvider>
        </body>
      </ThemeRegistry>
    </html>
  );
}
