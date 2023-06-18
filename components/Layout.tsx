import React, { ReactNode, useState, useEffect } from 'react'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import { client, type MemberRes } from '../libs/client'

import styles from 'styles/Layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'トレフォイルサウンド' }: Props) => {
  return (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <main className={styles.hero}>
      <header className={styles.nav_wrapper}>
        <h1 className={styles.nav_title}>
          トレフォイル<br/>サウンド
        </h1>
        <nav>
          <Link href="/">
            Home
          </Link>
          <Link href="/members">
            Members
          </Link>
        </nav>
      </header>
      <div className={styles.content_wrapper}>
        {children}
      </div>
    </main>
  </div>
  )
}

export default Layout
