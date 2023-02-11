import { ubuntu } from './fonts';
import './global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ubuntu.className}>
      <head />

      <body>{children}</body>
    </html>
  );
}
