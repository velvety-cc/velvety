import GridWithExternalLinks from '../../shared/layout/grid-with-external-links/grid-with-external-links';
import Link from 'next/link';
import styles from './resume.module.scss';
import Image from 'next/image';
import BackArrow from '../../../../public/back-arrow.svg';

export default function Resume() {
    return (
        <GridWithExternalLinks>
            <div className={styles.titleBar}>
                <div className={styles.h2Title}>Resume</div>
                <Link href='/about' className={styles.backButton}>
                    <span>
                        <Image src={BackArrow} alt='Back arrow'></Image>
                    </span>{' '}
                    Back to about
                </Link>
            </div>

            <div className={styles.lineBreak}></div>

            <div className={styles.h2Title}>Education</div>
            <div className={styles.h3Title}>
                <span>
                    New York University, Gallatin School of Individualized Study
                </span>
                <span className={styles.year}>2018 - 2022</span>
            </div>
            <div>
                <em>B.A in Finance, Computer Science, and Mathematics</em>
            </div>

            <div className={styles.lineBreak}></div>

            <div className={styles.h2Title}>Publications</div>

            <div className={styles.publicationItem}>
                Chi, Y., Hao, W., & Zhang, Y. (2022). Volatility model
                applications in China’s SSE50 options market.{' '}
                <em>Journal of Futures Markets</em>, 42, 1704– 1720.{' '}
                <Link
                    href='https://doi.org/10.1002/fut.22294'
                    target='_blank'
                    className={styles.publicationLink}
                >
                    https://doi.org/10.1002/fut.22294
                </Link>
            </div>

            <div className={styles.publicationItem}>
                Zhang, Y., Junque de Fortuny, E. (2022). State of the DeFi
                Landscape: Charting the Global DeFi Ecosystem.{' '}
                <em>Service Science</em>, Under Review
            </div>

            <div className={styles.lineBreak}></div>

            <div className={styles.h2Title}>Professional Experience</div>

            <div className={styles.experienceItem}>
                <div className={styles.h3Title}>
                    <span>
                        Co-Founder and Head of Product /{' '}
                        <Link
                            href='https://blockless.network'
                            target='_blank'
                            className={styles.linkStyle}
                        >
                            Blockless
                        </Link>
                    </span>
                    <span className={styles.year}>2021 - Present</span>
                </div>

                <div>
                    Directed the ideation, design, and implementation of
                    Blockless, a Web3 developer platform.
                </div>
            </div>

            <div className={styles.experienceItem}>
                <div className={styles.h3Title}>
                    <span>
                        Researcher and Investment Manager /{' '}
                        <Link
                            href='https://ngc.fund'
                            target='_blank'
                            className={styles.linkStyle}
                        >
                            NGC Ventures
                        </Link>
                    </span>
                    <span className={styles.year}>2020 - 2021</span>
                </div>

                <div>Research and investment on Web3 projects.</div>
            </div>

            <div className={styles.experienceItem}>
                <div className={styles.h3Title}>
                    <span>Researcher / Guosheng Blockchain Institute</span>
                    <span className={styles.year}>2020 - 2021</span>
                </div>

                <div>Research on Web3 projects.</div>
            </div>

            <div className={styles.experienceItem}>
                <div className={styles.h3Title}>
                    <span>
                        Investment Analyst /{' '}
                        <Link
                            href='http://beforcapital.com/'
                            target='_blank'
                            className={styles.linkStyle}
                        >
                            Befor Capital
                        </Link>
                    </span>
                    <span className={styles.year}>2019</span>
                </div>

                <div>VC investment.</div>
            </div>

            <div className={styles.experienceItem}>
                <div className={styles.h3Title}>
                    <span>Investment Analyst / Gaoyun Ventures</span>
                    <span className={styles.year}>2018</span>
                </div>

                <div>PE investment.</div>
            </div>

            <div className={styles.experienceItem}>
                <div className={styles.h3Title}>
                    <span>
                        Analyst /{' '}
                        <Link
                            href='https://en.gf.com.cn/'
                            target='_blank'
                            className={styles.linkStyle}
                        >
                            GF Securities
                        </Link>
                    </span>
                    <span className={styles.year}>2017</span>
                </div>

                <div>Investment banking.</div>
            </div>
        </GridWithExternalLinks>
    );
}
