import Star from './star/star';
import styles from './stars.module.css'

export default function Stars() {

    function GetStarGroup(numberOfStar : number) {
        return (
            [...Array(numberOfStar)].map((value: undefined, index: number) => (
                <Star key={index} />
            ))            
    );
    }

    return(
    <main className={styles.universe}>
        <div className={styles.tel}>{GetStarGroup(30)}</div>
        <div className={styles.tablette}>{GetStarGroup(50)}</div>
        <div className={styles.pc}>{GetStarGroup(50)}</div>
    </main>  
    )
}