import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Covenir Portal',
  description: 'Customer portal for CovenirBPO — business process outsourcing for insurance.',
  icons: { icon: '/covenir-icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
