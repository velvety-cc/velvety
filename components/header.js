import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

export const siteTitle = 'Velvety';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href='/'>
                <div className={styles.aboutButton}>
                    <div className={styles.aboutDivider}>
                        <hr />
                    </div>

                    <h1 className={styles.aboutText}>About</h1>
                </div>
            </Link>

            <Link href='/writing-table-of-contents'>
                <div className={styles.writingButton}>
                    <div className={styles.writingDivider}>
                        <hr />
                    </div>

                    <h1 className={styles.writingText}>Writing</h1>
                </div>
            </Link>

            <Link href='/archive-table-of-contents'>
                <div className={styles.archiveButton}>
                    <h1 className={styles.archiveText}>Archive</h1>

                    <div className={styles.archiveDivider}>
                        <hr />
                    </div>
                </div>
            </Link>
        </header>
    );
}
