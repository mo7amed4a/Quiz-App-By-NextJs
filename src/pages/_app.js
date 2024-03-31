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
        <meta name="description" className="meta_description" content="Quiz App - Mohamed Abdelrahman - MohamedAbdelrahmanDeveloper" />
        <meta name="twitter:image:src" content="https://avatars.githubusercontent.com/u/54208900" />
        <meta name="twitter:site" content="@MohamedAbdelrahmanDeveloper" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mohamed Abdelrahman" />
        <meta name="twitter:description" class="meta_description" content="Quiz App - Mohamed Abdelrahman - MohamedAbdelrahmanDeveloper" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/54208900" />
        <meta property="og:image:alt" className="meta_description" content="Quiz App - Mohamed Abdelrahman - MohamedAbdelrahmanDeveloper" />
        <meta property="og:site_name" content="MohamedAbdelrahmanDeveloper" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="MohamedAbdelrahmanDeveloper - Overview" />
        <meta property="og:url" content="https://mohamed-abdelrahman.surge.sh" />
        <meta property="og:description" className="meta_description" content="Quiz App - Mohamed Abdelrahman - MohamedAbdelrahmanDeveloper" />
        <meta property="profile:username" content="MohamedAbdelrahmanDeveloper" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
