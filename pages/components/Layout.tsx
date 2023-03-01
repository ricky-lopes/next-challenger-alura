import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

//@ts-ignore
export default function Layout({children}) {

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/icon.jfif"/>
                <title>CodeChella</title>
            </Head>
            <Navbar/>
                <main className="main-container">
                    {children}
                </main>
            <Footer/>
        </>
    )

}    