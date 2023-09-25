import Image from 'next/image'
import musicOn from '@/assets/images/musicOn.png'
import codewars from '@/assets/images/codewars.svg'
import styles from './intro.module.css'
import Stars from '../stars/stars'

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
                Après 5 ans dans l'in&shy;dus&shy;trie aé&shy;ro&shy;nau&shy;tique, le jeune Code&shy;walker se forme sur les lan&shy;ga&shy;ges web.
                <br/>
                Il trouve en&shy;sui&shy;te une alter&shy;nance au sein de Cegid, dans le dé&shy;ve&shy;lop&shy;pement, et obtient son pre&shy;mier di&shy;plô&shy;me dans ce do&shy;mai&shy;ne.
                <br/>
                Sa mis&shy;sion ter&shy;mi&shy;née, Code&shy;walker se met dé&shy;sor&shy;mais à la re&shy;cher&shy;che d'une en&shy;tre&shy;pri&shy;se pour dé&shy;bu&shy;ter le tra&shy;vail de ses rêves...
              </p>
  
              <a href="**" className={styles.space_button}>Découvrez son CV</a>
            </div>
          </div>
        </div>
    </main>
    )
  }