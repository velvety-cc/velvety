import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>
          This is the website of <b>Liam Zhang</b>.
        </h2>
        <p>
          I am the co-founder at {" "}
          <a href="https://txlabs.org/">TX Labs</a>
          , building {" "}
          <a href="https://blockless.network">Blockless</a> {" "}
          and @Efficiency DAO.
        </p>
        <p>
          Previously, I worked at NGC Ventures focuing on DeFi and Infrastructure investing.
        </p>
      </section>
    </Layout>
  );
}
