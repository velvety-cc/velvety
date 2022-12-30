'use client';

import styles from './Header.module.scss';
import NavColumn from './nav_column/NavColumn';
import Logo from './logo/Logo';
import { useState } from 'react';

export default function Header() {
    // define route state: ['home', 'about', 'writings', 'archive']
    const [route, setRoute] = useState('home');

    // function to set new route onClick, passed to children components
    function setNewRoute(newRoute: string) {
        setRoute(() => newRoute);
    }

    // return a correct Header component based on the route
    function headerContent(route) {
        return (
            <header className={styles.header}>
                <Logo
                    className={styles.logoButton}
                    onClick={() => setNewRoute('home')}
                ></Logo>
                <NavColumn
                    className={styles.navColumn}
                    route={route}
                    setNewRoute={() => setNewRoute(route)}
                ></NavColumn>
            </header>
        );
    }

    // determine the correct Header component
    function renderHeader(route: string) {
        switch (route) {
            case 'home':
                const homeHeader = headerContent(route);
                return homeHeader;
            case 'about':
                const aboutHeader = headerContent(route);
                return aboutHeader;
            case 'writings':
                const writingsHeader = headerContent(route);
                return writingsHeader;
            case 'archive':
                const archiveHeader = headerContent(route);
                return archiveHeader;
        }
    }

    return <div>{renderHeader(route)}</div>;
}
