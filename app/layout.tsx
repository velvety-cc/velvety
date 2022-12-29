'use client';

import { Inter } from '@next/font/google';
import './global.scss';
import Header from '../components/header';
import NavColumn from '../components/NavColumn';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={inter.className}>
            <body>
                <div className='mainContainer'>
                    <div className='content'>
                        <NavColumn></NavColumn>
                        <main>{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}

export default RootLayout;
