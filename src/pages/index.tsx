import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Image from 'next/image';



export default function Home() {
  return (
    <>
      <Head>
        <title>George Lucas Aplicativos </title>
      </Head>
      <div className={styles.containerHeader}>
      </div>
      <hr className={styles.hr} />
      <section className={styles.ctaText}>
      </section>
    </>
  )
}
