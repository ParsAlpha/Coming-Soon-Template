import React from "react";
import Timer from "../components/Countdown/Timer";
import EmailPage from "../components/subscribbe/subscribe"
import Footer from "../components/footer/footer"
import Logo from "../components/logo/logo"
import Head from 'next/head'
function App() {
  return (

    <div className="App">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FQRTP2LDYP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                                   function gtag(){dataLayer.push(arguments);}
                                   gtag('js', new Date());
                                 
                                   gtag('config', 'G-FQRTP2LDYP');`,
          }} />
      </Head>
      <div className="container">

        <div>
          <Logo />
        </div>
        <h1>
          SnappClub
          <br />
          به <span className="sub">زودی</span> با شما خواهیم بود
        </h1>
        <div>
          <Timer />
          <EmailPage />
        </div>
      </div>
      <Footer />

    </div>
  );
}

// const Home: NextPage = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>SnappClub</title>
//         <meta name="description" content="SnappClub commingsoon :)" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>

//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }


export default App
