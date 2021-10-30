import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.pageBorder}></div> */}
      <div className={`${styles.basicGrid} place-items-center w-12/12 h-12/12 text-white text-4xl font-mono font-bold`}>
        <a className="hover:underline" href="/stquake">stquake</a>
        <a className="hover:underline" href="/gru">gru</a>
      </div>
    </div>
  )
}

export default Home
