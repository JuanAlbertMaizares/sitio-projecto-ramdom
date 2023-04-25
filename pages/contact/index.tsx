import { Navbar } from "@/components/Navbar";
import { MainLayout } from "@/components/layouts/MainLayout";
import Link from "next/link";

export default function Contact() {
  return (
    <>
    <MainLayout>
        <div>
          <h2 className="title">Contact Page</h2>

          <h1 className={'title'}>
                Ir a <Link href="/">Home</Link>
          </h1>

          <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/contact.jsx</code>
          </p>
        </div>
    </MainLayout>

    </>
  )
}