import Head from 'next/head'
import React from "react";

import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from "../components/home/Banner";
import MainView from "../components/home/MainView";




const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HOME | SIMPLEBEE </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home-page">
        <Banner/>
      <div className="container page">
        <div className="row">
          <MainView />
        </div>
      </div>
    </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to FreemanBees!
        </h1>

        <p className={styles.description}>
          A Bee &amp; Honey Business.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>CardPlaceHolder1 &rarr;</h2>
            <p>CardPlaceHolder1 text</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>CardPlaceHolder2 &rarr;</h2>
            <p>CardPlaceHolder2 text</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a> SIMPLEBEE </a>
      </footer>
    </div>
  )
}

export default Home
