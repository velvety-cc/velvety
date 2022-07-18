import styles from './content.module.css';

export default function Content({ children, home }) {
    return (
        <>
            {home 
            ? (<div className={styles.contentHome}>
                <div className={styles.verticalDiv}> {children} </div>
            </div>)
            : (<div className={styles.content}>
                {children}
            </div>)
             }
        </>

    );
}