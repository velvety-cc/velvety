'use client';

import NavButton from './NavButton';
import styles from './NavColumn.module.scss';

/*
props.route: route state: ['home', 'about', 'writings', 'archive']
props.setRoute: function passed to change the route state
*/
export default function NavColumn(props) {
    function renderNavColumn(routeName: string) {
        switch (routeName) {
            case 'home':
                return (
                    <div className={props.className}>
                        <ul className={styles.navItems}>
                            <NavButton
                                route='/about'
                                routeName='About'
                                onClick={() => props.setNewRoute('about')}
                                clicked='false'
                            ></NavButton>
                            <NavButton
                                route='/writings'
                                routeName='Writings'
                                onClick={() => props.setNewRoute('writings')}
                                clicked='false'
                            ></NavButton>
                            <NavButton
                                route='/archive'
                                routeName='Archive'
                                onClick={() => props.setNewRoute('archive')}
                                clicked='false'
                            ></NavButton>
                        </ul>
                    </div>
                );
            case 'about':
                return (
                    <div className={props.className}>
                        <ul className={styles.navItems}>
                            <NavButton
                                route='/about'
                                routeName='About'
                                onClick={() => props.setNewRoute('about')}
                                clicked='true'
                            ></NavButton>
                            <NavButton
                                route='/writings'
                                routeName='Writings'
                                onClick={() => props.setNewRoute('writings')}
                                clicked='false'
                            ></NavButton>
                            <NavButton
                                route='/archive'
                                routeName='Archive'
                                onClick={() => props.setNewRoute('archive')}
                                clicked='false'
                            ></NavButton>
                        </ul>
                    </div>
                );
            case 'writings':
                return (
                    <div className={props.className}>
                        <ul className={styles.navItems}>
                            <NavButton
                                route='/about'
                                routeName='About'
                                onClick={() => props.setNewRoute('about')}
                                clicked='false'
                            ></NavButton>
                            <NavButton
                                route='/writings'
                                routeName='Writings'
                                onClick={() => props.setNewRoute('writings')}
                                clicked='true'
                            ></NavButton>
                            <NavButton
                                route='/archive'
                                routeName='Archive'
                                onClick={() => props.setNewRoute('archive')}
                                clicked='false'
                            ></NavButton>
                        </ul>
                    </div>
                );
            case 'archive':
                return (
                    <div className={props.className}>
                        <ul className={styles.navItems}>
                            <NavButton
                                route='/about'
                                routeName='About'
                                onClick={() => props.setNewRoute('about')}
                                clicked='false'
                            ></NavButton>
                            <NavButton
                                route='/writings'
                                routeName='Writings'
                                onClick={() => props.setNewRoute('writings')}
                                clicked='false'
                            ></NavButton>
                            <NavButton
                                route='/archive'
                                routeName='Archive'
                                onClick={() => props.setNewRoute('archive')}
                                clicked='true'
                            ></NavButton>
                        </ul>
                    </div>
                );
        }
    }

    return <nav>{renderNavColumn(props.route)}</nav>;
}
