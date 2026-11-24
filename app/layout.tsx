import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vidora',
  description: 'Discover short and long videos',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
