import React from "react"
import Link from "next/link"
import '../styles/reset.css'
import '../styles/styles.css'

export default function Header() {
    return(
        <>
            <header>
            <figure className="logo-area">
                <img src="images/logo.png" alt="Brand logo" id="logo-img"></img>
            </figure>
            <nav>
                <ul className="nav-bar">
                    <Link href="/">
                        <li className="nav-item">Home</li>
                    </Link>
                    <Link href="/drawings">
                        <li className="nav-item">Drawings</li>
                    </Link>
                    <Link href="/projects">
                        <li className="nav-item">Projects</li>
                    </Link>
                    <Link href="/contact">
                        <li className="nav-item">Contact</li>
                    </Link>
                    <Link href="/about">
                        <li className="nav-item">About</li>
                    </Link>                    
                </ul>
            </nav>
            </header>
        </>
    )
}
