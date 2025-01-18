import Head from "next/head.js"
import Layout from "../layouts/Layout.jsx"
import '@/styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Quiz App | Mohamed Abdelrahman</title>
        <meta name="description" className="meta_description" content="Quiz App - Mohamed Abdelrahman - mo7amed4a" />
        <meta name="twitter:image:src" content="https://avatars.githubusercontent.com/u/54208900" />
        <meta name="twitter:site" content="@mo7amed4a" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mohamed Abdelrahman" />
        <meta name="twitter:description" class="meta_description" content="Quiz App - Mohamed Abdelrahman - mo7amed4a" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/54208900" />
        <meta property="og:image:alt" className="meta_description" content="Quiz App - Mohamed Abdelrahman - mo7amed4a" />
        <meta property="og:site_name" content="mo7amed4a" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="mo7amed4a - Overview" />
        <meta property="og:url" content="https://mohamed-abdelrahman.surge.sh" />
        <meta property="og:description" className="meta_description" content="Quiz App - Mohamed Abdelrahman - mo7amed4a" />
        <meta property="profile:username" content="mo7amed4a" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
