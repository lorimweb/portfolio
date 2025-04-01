import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import StyledComponentsRegistry from '@/lib/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clenilson Lopes - Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <MainNav />
          <main>
            {children}
          </main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
