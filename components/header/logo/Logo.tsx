import styles from './Logo.module.scss';
import Link from 'next/link';

export default function Logo(props) {
    return (
        <Link href='/' className={props.className} onClick={props.onClick}>
            <div className={styles.logo}>VELVETY</div>
            <div className={styles.copyRight}>© 2023</div>
        </Link>
    );
}
