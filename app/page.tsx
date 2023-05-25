import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import './styles/styles.css'

export default function Home() {
    return(
        <>
            <Header />
            <main className="main-content">
                Home Page
            </main>
            <Footer />
        </>
    )
}
