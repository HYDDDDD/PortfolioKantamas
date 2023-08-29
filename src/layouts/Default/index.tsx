import React, { FC, Fragment, PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

export interface IDefaultLayoutProps extends PropsWithChildren {
  className?: string
}

const DefaultLayout: FC<IDefaultLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Portfolio Kantamas</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default DefaultLayout
