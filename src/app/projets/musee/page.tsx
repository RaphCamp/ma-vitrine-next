import MuseeHeader from './museeHeader/museeHeader'
import styles from './page.module.css'

export default function PageMusee() {
  return (
    <main className={styles.container}>
      <MuseeHeader/>
    </main>
  )
}
