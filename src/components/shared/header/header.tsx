'use client';

import NavButton from '../navigation/nav-button';
import Logo from '../logo/logo';
import MenuButton from '../navigation/menu-button';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
    // Render a nav button given the name of the button and whether it's clicked
    function renderNavButton(buttonName: string, clicked = false) {
        const route = '/' + buttonName;
        const routeName =
            buttonName.charAt(0).toUpperCase() + buttonName.substring(1);
        return (
            <NavButton
                route={route}
                routeName={routeName}
                clicked={clicked}
            ></NavButton>
        );
    }

    // Render the navigation
    function renderNavigation(route) {
        switch (route) {
            case '/':
                return (
                    <ul className='grid list-none grid-cols-1 gap-y-7'>
                        {renderNavButton('about')}
                        {renderNavButton('writings')}
                        {renderNavButton('archive')}
                    </ul>
                );
            case '/about':
                return (
                    <ul className='grid list-none grid-cols-1 gap-y-7'>
                        {renderNavButton('about', true)}
                        {renderNavButton('writings')}
                        {renderNavButton('archive')}
                    </ul>
                );
            case '/writings':
                return (
                    <ul className='grid list-none grid-cols-1 gap-y-7'>
                        {renderNavButton('about')}
                        {renderNavButton('writings', true)}
                        {renderNavButton('archive')}
                    </ul>
                );
            case '/archive':
                return (
                    <ul className='grid list-none grid-cols-1 gap-y-7'>
                        {renderNavButton('about')}
                        {renderNavButton('writings')}
                        {renderNavButton('archive', true)}
                    </ul>
                );
        }
    }

    function getPathName() {
        const rawPathName = usePathname();
        if (rawPathName.includes('/about')) {
            return '/about';
        } else if (rawPathName.includes('/writings')) {
            return '/writings';
        } else if (rawPathName.includes('/archive')) {
            return '/archive';
        } else {
            return '/';
        }
    }

    // State for whether the menu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // State for whether the header is shrunk
    const [isShrunk, setShrunk] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            setShrunk((isShrunk) => {
                if (!isShrunk && window.scrollY > 12) {
                    return true;
                }

                if (isShrunk && window.scrollY < 4) {
                    return false;
                }

                return isShrunk;
            });
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // return a correct Header component based on the route
    function headerContent(route) {
        return (
            <header className='sm:mt-44'>
                {/* Desktop header */}
                <section className='hidden sm:grid sm:w-full sm:grid-cols-3 sm:gap-x-8 lg:gap-x-16'>
                    <Logo></Logo>
                    <div className='col-span-1 col-start-3'>
                        {renderNavigation(route)}
                    </div>
                </section>

                {/* Mobile header */}
                <section className='sm:hidden'>
                    {/* Nav bar */}
                    <div
                        className={`fixed left-0 right-0 top-0 z-10 bg-white/80 px-8 pt-16 backdrop-blur transition duration-200 ease-in-out ${
                            isShrunk ? '-translate-y-8 pb-2 shadow-sm' : 'pb-4'
                        }`}
                    >
                        <div className='flex w-full flex-row items-center justify-between'>
                            <Logo></Logo>
                            <div className='inline-block'>
                                <MenuButton
                                    onClick={() => {
                                        toggleMenu();
                                    }}
                                    clicked={isMenuOpen}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Nav menu */}
                    <div
                        className={`
                        fixed left-0 right-0 top-0 z-10 h-full cursor-pointer bg-white px-8 pt-16 transition-all duration-300 ease-in-out
                        ${
                            isMenuOpen
                                ? 'opacity-100'
                                : 'pointer-events-none opacity-0'
                        }
                        `}
                        onClick={() => {
                            toggleMenu();
                        }}
                    >
                        <div
                            className={`flex w-full flex-row items-center justify-between transition duration-300 ease-in-out ${
                                isShrunk ? '-translate-y-8' : ''
                            }`}
                        >
                            <Logo></Logo>
                            <div className='inline-block'>
                                <MenuButton
                                    onClick={() => {
                                        toggleMenu();
                                    }}
                                    clicked={isMenuOpen}
                                />
                            </div>
                        </div>
                        <div
                            className={`mt-16 transition duration-300 ease-in-out ${
                                isShrunk ? '-translate-y-8' : ''
                            }`}
                        >
                            {renderNavigation(route)}
                        </div>
                    </div>
                </section>
            </header>
        );
    }

    return <div>{headerContent(getPathName())}</div>;
}
