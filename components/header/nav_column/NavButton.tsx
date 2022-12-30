import styles from './NavButton.module.scss';
import Link from 'next/link';

/*
    props.route:
    props.routeName
    props.onClick
*/
export default function NavButton(props) {
    function renderNavButton(isClicked: string) {
        switch (isClicked) {
            case 'true':
                return (
                    <div>
                        <Link
                            href={props.route}
                            className={styles.navLinksClicked}
                        >
                            {props.routeName}
                        </Link>
                        <div className={styles.dividerClicked}></div>
                    </div>
                );
            case 'false':
                return (
                    <div>
                        <Link href={props.route} className={styles.navLinks}>
                            {props.routeName}
                        </Link>
                        <div className={styles.divider}></div>
                    </div>
                );
        }
    }

    return (
        <li className={styles.navButton} onClick={props.onClick}>
            {renderNavButton(props.clicked)}
        </li>
    );
}
