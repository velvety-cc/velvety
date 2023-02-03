import Header from '../header/Header';
import ExternalLinks from '../external-links/external-links';
import styles from './grid-with-external-links.module.scss';

export default function GridWithExternalLinks({ children }) {
    return (
        <div>
            <Header></Header>
            <div className={styles.grid}>
                <div className={styles.grid15}>{children}</div>
                <div className={styles.grid56}>
                    <ExternalLinks></ExternalLinks>
                </div>
            </div>
        </div>
    );
}
