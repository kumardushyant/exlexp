import Head from 'next/head'
import styles from '../styles/Home.module.css'
import api from './api/hello';

export default function Home() {

  const name = "Dushyant Kumar";

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome {name}</h1>
      </main>
      
    </div>
  )
}
