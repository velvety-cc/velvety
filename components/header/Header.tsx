'use client';

import styles from './Header.module.scss';
import NavButton from './nav_button/NavButton';
import Logo from './logo/Logo';
import { useState } from 'react';

export default function Header() {
    // define route state: ['home', 'about', 'writings', 'archive']
    const [route, setRoute] = useState('home');

    // function to set new route onClick, passed to children components
    function setNewRoute(newRoute: string) {
        setRoute(() => newRoute);
    }

    // render a nav button given the name of the button and whether it's clicked
    function renderNavButton(buttonName: string, clicked = false) {
        const route = '/' + buttonName;
        const routeName =
            buttonName.charAt(0).toUpperCase() + buttonName.substring(1);
        return (
            <NavButton
                route={route}
                routeName={routeName}
                onClick={() => setNewRoute(buttonName)}
                clicked={clicked}
            ></NavButton>
        );
    }

    //render the navigation
    function renderNavigation(route) {
        switch (route) {
            case 'home':
                return (
                    <ul className={styles.navItems}>
                        {renderNavButton('about')}
                        {renderNavButton('writings')}
                        {renderNavButton('archive')}
                    </ul>
                );
            case 'about':
                return (
                    <ul className={styles.navItems}>
                        {renderNavButton('about', true)}
                        {renderNavButton('writings')}
                        {renderNavButton('archive')}
                    </ul>
                );
            case 'writings':
                return (
                    <ul className={styles.navItems}>
                        {renderNavButton('about')}
                        {renderNavButton('writings', true)}
                        {renderNavButton('archive')}
                    </ul>
                );
            case 'archive':
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
                    <Logo onClick={() => setNewRoute('home')}></Logo>
                </div>
                {renderNavigation(route)}
            </header>
        );
    }

    return <div>{headerContent(route)}</div>;
}
