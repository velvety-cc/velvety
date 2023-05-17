import { Inter } from 'next/font/google';
import './global.scss';
import './global.css';
import { AnalyticsWrapper } from '../components/shared/analytics';
import { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
    title: {
        template: '%s | Velvety',
        default: 'Velvety',
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
                <main>{children}</main>
                <AnalyticsWrapper />
            </body>
        </html>
    );
}
