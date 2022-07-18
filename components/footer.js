import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer ({ home }){
    return (
          
    <footer className={styles.footer}>
        <div className={styles.logo}>
            <Link href="/">
                <div className={styles.velvetyLogo}>VELVETY</div>
            </Link>
            <div className={styles.copyRight}>© 2022</div>
        </div>
    </footer>

    );
}