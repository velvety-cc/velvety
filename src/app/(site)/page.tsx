import styles from './home.module.scss';
import Link from 'next/link';

function Page() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.biography}>
                <div className={styles.title}>Biography</div>
                <div className={styles.description}>
                    <p className={styles.paragraph}>
                        Liam Zhang is the head of product and technology of{' '}
                        <Link
                            href='http://blockless.network'
                            target='_blank'
                            className={styles.link}
                        >
                            Blockless
                        </Link>
                        , a developer platform helping users to build and ship
                        new generation of web applications.
                    </p>
                    <p className={styles.paragraph}>
                        Previously, Liam worked at{' '}
                        <Link
                            href='https://ngc.fund/home'
                            target='_blank'
                            className={styles.link}
                        >
                            NGC Ventures
                        </Link>
                        , a crypto venture capital firm, focusing on DeFi and
                        Infrastructure investing.
                    </p>
                    <p className={styles.paragraph}>
                        Liam operates in multiple disciplines including design,
                        engineering, finance, and product management.
                    </p>
                </div>
            </div>

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
        </div>
    );
}

export default Page;
