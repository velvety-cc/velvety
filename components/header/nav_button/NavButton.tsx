import styles from './NavButton.module.scss';
import Link from 'next/link';

/*
    props.route:
    props.routeName
    props.onClick
*/
export default function NavButton(props) {
    function renderNavButton(clicked: boolean) {
        switch (clicked) {
            case true:
                return (
                    <div onClick={props.onClick}>
                        <Link
                            href={props.route}
                            className={styles.navLinksClicked}
                        >
                            {props.routeName}
                        </Link>
                        <div className={styles.dividerClicked}></div>
                    </div>
                );
            case false:
                return (
                    <div onClick={props.onClick}>
                        <Link href={props.route} className={styles.navLinks}>
                            {props.routeName}
                        </Link>
                        <div className={styles.divider}></div>
                    </div>
                );
        }
    }

    /*
    function renderNavButton() {
        return (
            <div onClick={props.onClick}>
                <Link href={props.route} className={styles.navLinks}>
                    {props.routeName}
                </Link>
                <div className={styles.divider}></div>
            </div>
        );
    }
*/

    return (
        <li className={styles.navButton}>{renderNavButton(props.clicked)}</li>
    );
}
