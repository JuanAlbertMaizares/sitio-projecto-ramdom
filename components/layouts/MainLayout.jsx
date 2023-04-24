import styles from './MainLayout.module.css'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import Head from 'next/head'

export const MainLayout = ({children}) => {
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
