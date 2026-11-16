import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Chaste Djaziri | Developer & Creator', description: 'Portfolio of Chaste Djaziri — software developer, pianist, artist and skater.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
