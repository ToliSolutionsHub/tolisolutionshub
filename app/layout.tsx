import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  fallback: ['serif']
});

export const metadata: Metadata = {
  title: 'Anatoli Bigdas - Full Stack Developer',
  description: 'Senior Full Stack Developer with 8+ years of experience in React, Node.js, TypeScript, and modern web technologies',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'TypeScript', 'Web3', 'Blockchain', 'AI/ML'],
  authors: [{ name: 'Anatoli Bigdas' }],
  creator: 'Anatoli Bigdas',
  icons: {
    icon: 'https://api.iconify.design/mdi:code-braces.svg?color=%236366f1',
    shortcut: 'https://api.iconify.design/mdi:code-braces.svg?color=%236366f1',
    apple: 'https://api.iconify.design/mdi:code-braces.svg?color=%236366f1&width=180&height=180',
  },
  openGraph: {
    title: 'Anatoli Bigdas - Full Stack Developer',
    description: 'Senior Full Stack Developer with 8+ years of experience',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}