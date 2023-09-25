'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Component } from "react"
import Image from 'next/image'
import codewars from '@/assets/images/codewars.svg'
import stormTrooper from '@/assets/images/stormtrooper.svg'
import styles from './navbar.module.css'

export default function Navbar() {
    const pathname = usePathname();
    return (
        <main className={styles.nav}>
            <a href="#" className={styles.nav_icon} aria-label="visit homepage" aria-current="page">
            <Image src={codewars} alt="chat icon"/>
            <span>Raphaël Codewalker</span>
            </a>
    
            <div className={styles.main_navlinks}>
            <button className="hamburger" type="button" aria-label="Toggle navigation" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={styles.navlinks_container}>
                <Link className={`link ${pathname === '/' ? styles.active : styles.inactive}`} href="/">Accueil</Link>
                <Link className={`link ${pathname === '/cv' ? styles.active : styles.inactive}`} href="/cv">Mon CV</Link>
                <Link className={`link ${pathname === '/projets' ? styles.active : styles.inactive}`} href="/projets">Projets Perso</Link>
                <Link className={`link ${pathname === '/sites' ? styles.active : styles.inactive}`} href="/sites">Sites</Link>
                <Link className={`link ${pathname === '/contact' ? styles.active : styles.inactive}`} href="/contact">Contact</Link>
            </div>
            </div>
    
            <div className={styles.nav_authentication}>
            <a href="#" className={styles.sign_user} aria-label="Sign in page">
                <Image src={stormTrooper} alt="user-icon"/>
            </a>
            <div className={styles.sign_btns}>
                <button type="button">Sign In</button>
                <button type="button">Sign Up</button>
            </div>
            </div>
        </main>
      )
}