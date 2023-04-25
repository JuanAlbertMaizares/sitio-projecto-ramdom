import { Navbar } from "../components/Navbar";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <> 
        <div>
          <h2 className="title">About Page</h2>

          <h1 className={'title'}>
                Ir a <Link href="/">Home</Link>
          </h1>

          <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/about.jsx</code>
          </p>
        </div>  
    </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}