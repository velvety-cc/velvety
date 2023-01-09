import styles from './about.module.scss';
import Link from 'next/link';

function About() {
    function renderExternalLink() {
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

    return (
        <div className={styles.aboutContainer}>
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
                        product at Blockless, a decentralized computing and
                        developer platform.
                    </p>
                    <p className={styles.paragraph}>
                        Previously, my work spans financial research, investment
                        banking, and private equity and venture capital
                        investing. Take a look at my resume if you are
                        interested.
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

            {renderExternalLink()}
        </div>
    );
}

export default About;
