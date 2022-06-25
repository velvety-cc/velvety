import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstEssay() {
    return (
    <Layout>
        <Head>
            <title>First Essay</title>
        </Head>
        
        <h1>First Essay</h1>
        <Link href="/">
            <a>Go back to home page</a>
        </Link>
    </Layout>
    );
}