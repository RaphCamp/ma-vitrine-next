import styles from './star.module.css'


export default function Star() {

    function randomRotate():number {
        return Math.floor(Math.random() * 360);
    }
    function randomAnimationDuration():number {
        return 1 + Math.random() * 2;
    }
    function randomAnimationDelay():number {
        return Math.random() * 2;
    }

    return (
    <main>
          <div className={styles.star} style={{transform: "rotateZ("+randomRotate()+"deg); animation-duration: "+randomAnimationDuration()+"s; animation-delay: "+randomAnimationDelay()+"s"}}><div className={styles.point}></div></div>
    </main>
    )


}