'use client';
//test

import styles from './header.module.scss';
import NavButton from '../nav-button/nav-button';
import Logo from '../logo/logo';
import { usePathname } from 'next/navigation';

export default function Header() {
    // render a nav button given the name of the button and whether it's clicked
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

    //render the navigation
    function renderNavigation(route) {
        switch (route) {
            case '/':
                return (
                    <ul className={styles.navItems}>
                        {renderNavButton('about')}
                        {renderNavButton('writings')}
                        {renderNavButton('archive')}
                    </ul>
                );
            case '/about':
                return (
                    <ul className={styles.navItems}>
                        {renderNavButton('about', true)}
                        {renderNavButton('writings')}
                        {renderNavButton('archive')}
                    </ul>
                );
            case '/writings':
                return (
                    <ul className={styles.navItems}>
                        {renderNavButton('about')}
                        {renderNavButton('writings', true)}
                        {renderNavButton('archive')}
                    </ul>
                );
            case '/archive':
                return (
                    <ul className={styles.navItems}>
                        {renderNavButton('about')}
                        {renderNavButton('writings')}
                        {renderNavButton('archive', true)}
                    </ul>
                );
        }
    }

    // return a correct Header component based on the route
    function headerContent(route) {
        return (
            <header className={styles.header}>
                <div className={styles.logoButton}>
                    <Logo></Logo>
                </div>
                {renderNavigation(route)}
            </header>
        );
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

    return <div>{headerContent(getPathName())}</div>;
}
