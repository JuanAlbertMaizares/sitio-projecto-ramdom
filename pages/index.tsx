import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function HomePage( { children } ) {

  return (
        <>
          <MainLayout>
            <h2 className="title">Home Page</h2>
              <h1 className='title'>
                ir a <Link href="/about">About</Link>
              </h1>
              <p className='description'>
                Get started by editing{' '}
                <code className='code'>pages/index.js</code>
              </p>
          </MainLayout>
        </>
  )
}