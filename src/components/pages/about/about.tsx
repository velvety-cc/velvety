import styles from './about.module.scss';
import Link from 'next/link';
import GridWithExternalLinks from '../../shared/layout/grid-with-external-links';

export default function About() {
    return (
        <GridWithExternalLinks>
            <div className={styles.leftColumn}>
                <div className={styles.aboutVelvety}>
                    <p className={styles.aboutParagraph}>
                        Velvety is a personal archive, designed and built by
                        Liam Zhang. It’s a wardrobe of ideas, writings, and
                        projects. A living collection of memories, thoughts, and
                        conscience.
                    </p>
                </div>

                <div className={styles.aboutLiam}>
                    <div className={styles.title}>About Liam</div>
                    <p className={styles.paragraph}>
                        On a daily basis, I am the co-founder and head of
                        product at{' '}
                        <Link
                            href='http://blockless.network'
                            target='_blank'
                            className={styles.linkInline}
                        >
                            Blockless
                        </Link>
                        , a decentralized computing and developer platform.
                    </p>
                    <p className={styles.paragraph}>
                        Previously, my work spans financial research, investment
                        banking, and private equity and venture capital
                        investing. Take a look at my{' '}
                        <Link
                            href='/about/resume'
                            className={styles.linkInline}
                        >
                            resume
                        </Link>{' '}
                        if you are interested.
                    </p>
                    <p className={styles.paragraph}>
                        Heavily concentrated in finance early in my career, I
                        like to consider myself now as someone who creates.
                    </p>
                    <p className={styles.paragraph}>
                        In my spare time, I enjoy design, software engineering,
                        automobile engineering (slowly getting started),
                        longevity (experimenting), interior/furniture design
                        (Pierre Jeanneret in particular), and many more.
                    </p>
                </div>

                <div className={styles.aboutThisWebsite}>
                    <div className={styles.title}>About This Website</div>
                    <p className={styles.paragraph}>
                        The website is designed with Figma. It is built using
                        Next.js and is hosted and served by Vercel.
                    </p>
                </div>
            </div>
        </GridWithExternalLinks>
    );
}
