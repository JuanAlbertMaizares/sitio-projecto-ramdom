import styles from './MainLayout.module.css'
import Link from 'next/link'
import { Navbar } from '../Navbar'
import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

export const MainLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    
    <>
        <Head>
            <title key="title">Fenker Page</title>
            <meta name="description" content="This is a Home Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div style={{marginTop: '60px'}}>
            { children }
        </div>
    </>
  )
}
