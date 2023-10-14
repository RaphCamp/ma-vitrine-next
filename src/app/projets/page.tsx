import Link from "next/link";
import styles from "./page.module.css"

export default function PageProjets() {
  return (
    <main className={styles.container}>
      <div className={styles.project1}>
        <Link href="/projets/musee">Musee</Link>
      </div>
  </main>
  )
}
