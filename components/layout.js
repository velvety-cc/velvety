import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import Header from './header'
import Content from './content';
import Footer from './footer';

const name = 'Velvety';
export const siteTitle = 'Velvety';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>

      <Head>

        # Primary Meta Tags
        <title>Velvety</title>
        <meta name="title" content="Velvety"/>
        <meta name="description" content="Velvety is Liam Zhang."/>

        # Open Graph / Facebook
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.velvety.xyz/"/>
        <meta property="og:title" content="Velvety"/>
        <meta property="og:description" content="Velvety is Liam Zhang."/>
        <meta property="og:image" content="https://og-image.vercel.app/Velvety.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"/>

        # Twitter
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.velvety.xyz/"/>
        <meta property="twitter:title" content="Velvety"/>
        <meta property="twitter:description" content="Velvety is Liam Zhang."/>
        <meta property="twitter:image" content="https://og-image.vercel.app/Velvety.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"/>
        
      </Head>

      <Header></Header>

      <Content>{children}</Content>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <Footer></Footer>

    </div>
  );
}
