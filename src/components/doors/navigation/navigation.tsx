import { rubik_pixels } from '@/app/fonts';
import styles from './navigation.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavigationPops {
     handleButtonClick : any;
}

export default function Navigation(props:NavigationPops) {
    const pathname = usePathname();
    const [panelIsUp,setPanelIsUp] = useState(true);
    const handleDestinationClick = () => {  
        props.handleButtonClick();
    }
    const handlePanelButtonClick = () => {  
        setPanelIsUp(panelIsUp!);
        props.handleButtonClick();
    }
    return (
        <main className={`${styles.container} ${panelIsUp? styles.upPanel:styles.downPanel}`}>
            <div className={styles.destinations}>
                <Link className={`${styles.destination} link ${pathname === '/' ? styles.active : styles.inactive}`} href="/">Accueil</Link>
                <Link className={`${styles.destination} link ${pathname === '/cv' ? styles.active : styles.inactive}`} href="/cv">Mon CV</Link>
                <Link className={`${styles.destination} link ${pathname === '/projets' ? styles.active : styles.inactive}`} href="/projets">Projets Perso</Link>
                <Link className={`${styles.destination} link ${pathname === '/sites' ? styles.active : styles.inactive}`} href="/sites">Sites</Link>
                <Link className={`${styles.destination} link ${pathname === '/contact' ? styles.active : styles.inactive}`} href="/contact">Contact</Link>
            </div>
            <div className={styles.footer}>
                <div onClick={handlePanelButtonClick} className={styles.screen}>
                    <div className={styles.instructions}>
                    <p className={styles.instruction}>Welcome</p>
                    <p className={styles.instruction2}>Please enter a destination</p>
                    </div>
                </div>
            </div>
        </main>
    )
}