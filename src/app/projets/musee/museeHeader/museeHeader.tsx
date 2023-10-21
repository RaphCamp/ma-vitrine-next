import MuseeButtons from './museeButtons/museeButtons'
import styles from './museeHeader.module.css'

export default function MuseeHeader() {
  return (
    <main className={styles.container}>
        <MuseeButtons/>
        <MuseeButtons/>
        <MuseeButtons/>
        <MuseeButtons/>
    </main>
  )
}
