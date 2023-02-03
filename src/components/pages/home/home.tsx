import styles from './home.module.scss';
import Link from 'next/link';
import Header from '../../shared/header/Header';
import GridWithExternalLinks from '../../shared/layout/grid-with-external-links';

export default function Home() {
    return (
        <GridWithExternalLinks>
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
                            , a developer platform helping users to build and
                            ship new generation of web applications.
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
                            , a crypto venture capital firm, focusing on DeFi
                            and Infrastructure investing.
                        </p>
                        <p className={styles.paragraph}>
                            Liam operates in multiple disciplines including
                            design, engineering, finance, and product
                            management.
                        </p>
                    </div>
                </div>
            </div>
        </GridWithExternalLinks>
    );
}
