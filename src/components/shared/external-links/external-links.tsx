import styles from './external-links.module.scss';
import Link from 'next/link';

function renderLinkItem(href, name) {
    return (
        <Link href={href} target='_blank' className={styles.link}>
            {'>'} {name}
        </Link>
    );
}

export default function ExternalLinks() {
    return (
        <div className={styles.externalLinks}>
            <div className={styles.title}>External Links</div>
            <ul className={styles.unorderedList}>
                <li className={styles.linkList}>
                    {renderLinkItem(
                        'https://twitter.com/imliamzhang',
                        'Twitter'
                    )}
                </li>
                <li className={styles.linkList}>
                    {renderLinkItem('https://github.com/imliamzhang', 'GitHub')}
                </li>
                <li className={styles.linkList}>
                    {renderLinkItem(
                        'https://www.instagram.com/imliamzhang/',
                        'Instagram'
                    )}
                </li>
                <li className={styles.linkList}>
                    {renderLinkItem(
                        'https://www.linkedin.com/in/imliamzhang/',
                        'LinkedIn'
                    )}
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
