'use client';

import { Inter } from '@next/font/google';
import './global.scss';
import Header from '../components/header/Header';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={inter.className}>
            <body>
                <div className='mainContainer'>
                    <div className='content'>
                        <Header></Header>
                        <main>{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}

export default RootLayout;
