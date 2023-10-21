import Link from "next/link";
import styles from "./page.module.css"

export default function PageProjets() {
  return (
    <main className={styles.container}>
        <Link className={styles.musee} href="/projets/musee">
          <p>Musée</p>
        </Link>
  </main>
  )
}
