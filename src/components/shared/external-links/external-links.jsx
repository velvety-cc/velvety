import styles from './external-links.module.scss';
import Link from 'next/link';

export default function ExternalLinks() {
    return (
        <div className={styles.externalLinks}>
            <div className={styles.title}>External Links</div>
            <ul className={styles.unorderedList}>
                <li className={styles.linkListFirst}>
                    <Link
                        href='https://twitter.com/imliamzhang'
                        target='_blank'
                        className={styles.link}
                    >
                        {'>'} Twitter
                    </Link>
                </li>
                <li className={styles.linkList}>
                    <Link
                        href='https://github.com/imliamzhang'
                        target='_blank'
                        className={styles.link}
                    >
                        {'>'} GitHub
                    </Link>
                </li>
                <li className={styles.linkList}>
                    <Link
                        href='https://www.instagram.com/imliamzhang/'
                        target='_blank'
                        className={styles.link}
                    >
                        {'>'} Instagram
                    </Link>
                </li>
                <li className={styles.linkList}>
                    <Link
                        href='https://www.linkedin.com/in/imliamzhang/'
                        target='_blank'
                        className={styles.link}
                    >
                        {'>'} LinkedIn
                    </Link>
                </li>
                <li className={styles.linkList}>
                    <Link
                        href='mailto: imliamzhang@gmail.com'
                        className={styles.link}
                    >
                        {'>'} Email
                    </Link>
                </li>
            </ul>
        </div>
    );
}
