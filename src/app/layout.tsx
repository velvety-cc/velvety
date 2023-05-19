import { Inter } from 'next/font/google';
import './global.css';
import { AnalyticsWrapper } from '../components/shared/analytics';
import { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
    title: {
        template: '%s - Velvety',
        default: 'Velvety - A Personal Archive',
    },
    description: 'A personal archive.',
    icons: { icon: '/icon.ico' },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    creator: 'Liam Zhang',
    metadataBase: new URL('https://velvety.cc'),
    openGraph: {
        title: 'Velvety',
        description: 'A personal archive.',
        url: 'https://velvety.cc',
        siteName: 'Velvety',
        images: [
            {
                url: 'https://velvety.cc/meta_img.svg',
                width: 1200,
                height: 628,
            },
        ],
        locale: 'en-US',
        type: 'website',
    },
};

// Font
const inter = Inter({ subsets: ['latin'] });

// Root layout
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className={inter.className}>
            <body>
                <main className='mx-auto h-full max-w-7xl scroll-smooth px-8 py-16 antialiased sm:px-16'>
                    {children}
                </main>
                <AnalyticsWrapper />
            </body>
        </html>
    );
}
