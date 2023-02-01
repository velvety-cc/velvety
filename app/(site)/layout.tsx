'use client';

import { Inter } from '@next/font/google';
import '../global.scss';
import Header from '../../components/header/Header';
import { AnalyticsWrapper } from '../../components/analytics';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className={inter.className}>
            <body>
                <div className='mainContainer'>
                    <div className='content'>
                        <Header></Header>
                        <main>{children}</main>
                        <AnalyticsWrapper />
                    </div>
                </div>
            </body>
        </html>
    );
}
