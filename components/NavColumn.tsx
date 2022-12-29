'use client';

import NavButton from './NavButton';
import styles from './NavColumn.module.scss';
import { useState } from 'react';

export default function NavColumn() {
    const [route, setRoute] = useState('home');

    function setNewRoute(routeName: string) {
        setRoute(() => routeName);
    }

    function renderNavColumn(routeName: string) {
        switch (routeName) {
            case 'home':
                return (
                    <ul className={styles.navItems}>
                        <NavButton
                            route='/about'
                            routeName='About'
                            onClick={() => setNewRoute('about')}
                            clicked='false'
                        ></NavButton>
                        <NavButton
                            route='/writings'
                            routeName='Writings'
                            onClick={() => setNewRoute('writings')}
                            clicked='false'
                        ></NavButton>
                        <NavButton
                            route='/archive'
                            routeName='Archive'
                            onClick={() => setNewRoute('archive')}
                            clicked='false'
                        ></NavButton>
                    </ul>
                );
            case 'about':
                return (
                    <ul className={styles.navItems}>
                        <NavButton
                            route='/about'
                            routeName='About'
                            onClick={() => setNewRoute('about')}
                            clicked='true'
                        ></NavButton>
                        <NavButton
                            route='/writings'
                            routeName='Writings'
                            onClick={() => setNewRoute('writings')}
                            clicked='false'
                        ></NavButton>
                        <NavButton
                            route='/archive'
                            routeName='Archive'
                            onClick={() => setNewRoute('archive')}
                            clicked='false'
                        ></NavButton>
                    </ul>
                );
            case 'writings':
                return (
                    <ul className={styles.navItems}>
                        <NavButton
                            route='/about'
                            routeName='About'
                            onClick={() => setNewRoute('about')}
                            clicked='false'
                        ></NavButton>
                        <NavButton
                            route='/writings'
                            routeName='Writings'
                            onClick={() => setNewRoute('writings')}
                            clicked='true'
                        ></NavButton>
                        <NavButton
                            route='/archive'
                            routeName='Archive'
                            onClick={() => setNewRoute('archive')}
                            clicked='false'
                        ></NavButton>
                    </ul>
                );
            case 'archive':
                return (
                    <ul className={styles.navItems}>
                        <NavButton
                            route='/about'
                            routeName='About'
                            onClick={() => setNewRoute('about')}
                            clicked='false'
                        ></NavButton>
                        <NavButton
                            route='/writings'
                            routeName='Writings'
                            onClick={() => setNewRoute('writings')}
                            clicked='false'
                        ></NavButton>
                        <NavButton
                            route='/archive'
                            routeName='Archive'
                            onClick={() => setNewRoute('archive')}
                            clicked='true'
                        ></NavButton>
                    </ul>
                );
        }
    }

    return <nav>{renderNavColumn(route)}</nav>;
}
