import { Component } from "react"
import Image from 'next/image'
import codewars from '@/assets/images/codewars.svg'
import stormTrooper from '@/assets/images/stormtrooper.svg'
import styles from './navbar.module.css'

export default function Navbar() {
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
                <a href="#" aria-current="page">Accueil</a>
                <a href="#">Mon CV</a>
                <a href="#">Projets Perso</a>
                <a href="#">Sites</a>
                <a href="#">Contact</a>
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