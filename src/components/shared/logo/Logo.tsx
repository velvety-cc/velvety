import styles from './logo.module.scss';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href='/'>
            <div className={styles.logo}>VELVETY</div>
            <div className={styles.copyRight}>&copy; 2023</div>
        </Link>
    );
}
