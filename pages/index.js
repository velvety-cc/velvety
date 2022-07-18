import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Content from '../components/content';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Content home>
        <p>
          Liam Zhang is the co-founder of {" "}
          <a href="https://txlabs.org/" target="_blank">TX Labs</a>
          . He is currently building {" "}
          <a href="https://blockless.network" target="_blank">Blockless</a> {" "}
          and {" "}
          <a href="https://efficiency.finance" target="_blank">Efficiency DAO</a>.
        </p>
        <p>
          Previously, Liam worked at {" "}
          <a href="https://ngc.fund" target="_blank">NGC Ventures</a> {" "}
          focusing on DeFi and infrastructure investing. 
          He was also a researcher in quantitative and decentralized finance. 
        </p>
        <p>
          Liam graduated from NYU in 2022.
        </p>

        <ul>
          <li>
            {"> "}
            <a href="https://twitter.com/imliamzhang" target="_blank">Twitter</a>
          </li>
          <li>
            {"> "}
            <a href="https://github.com/imliamzhang" target="_blank">GitHub</a> 
          </li>
          <li>
            {"> "}
            <a href="https://www.linkedin.com/in/imliamzhang/" target="_blank">LinkedIn</a> 
          </li>
        </ul>

      </Content>
    </Layout>
  );
}
