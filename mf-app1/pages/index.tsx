import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Yoda from '../components/Yoda'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Microfrontend Jedi</title>
        <meta name="description" content="This is an app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Yoda />
    </div>
    )
}

export default Home
