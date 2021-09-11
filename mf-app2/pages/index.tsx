import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import DarthVader from '../components/DarthVader'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Microfrontend de la Republica</title>
        <meta name="description" content="This is an app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarthVader />
    </div>
    )
}

export default Home
