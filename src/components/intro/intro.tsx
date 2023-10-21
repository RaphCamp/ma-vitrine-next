import Image from 'next/image'
import musicOn from '@/assets/images/musicOn.png'
import codewars from '@/assets/images/codewars.svg'
import styles from './intro.module.css'
import Stars from '../stars/stars'
import Link from 'next/link'

export default function Intro() {
    return (
    <main>
    <Stars/>
      <div className={styles.presentation}>
          <p className={styles.introduction}>
          </p>
          <h2 className={styles.logo}>
            <Image src={codewars} alt={''}/>
          </h2>
          <div className={styles.scrolling}>
            <div className={styles.texte}>
              <p className={styles.titre}>
                Raphael Codewalker
                <br/>
                Un nouveau développeur</p>
              <br/>
              <p className={styles.paragraphe}>
                Après 5 ans dans l'industrie aéronautique, le jeune Codewalker se forme sur les langages web.
                <br/>
                Il trouve ensuite une alternance au sein de Cegid, dans le développement, et obtient son premier diplôme dans ce domaine.
                <br/>
                Sa mission terminée, Codewalker se met désormais à la recherche d'une entreprise pour débuter le travail de ses rêves...
              </p>
              <Link className={styles.space_button} href="/cv">Découvrez son CV</Link>
            </div>
          </div>
        </div>
    </main>
    )
  }