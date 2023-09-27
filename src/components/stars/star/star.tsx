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
    function randomStyle() {
        return{
            transform: `rotateZ(${randomRotate()}deg)`, animationDuration: `${randomAnimationDuration()}s`, animationDelay: `${randomAnimationDelay()}s`
        };
    }
    return (
      <main className={styles.star} style={randomStyle()}><div className={styles.point}></div></main>
    )


}