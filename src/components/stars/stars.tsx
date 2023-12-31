import Star from './star/star';
import styles from '@/components/stars/stars.module.css'

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
        {/* tu feras gaffe tes étoiles pour tablette et tel sont quand meme chargées sur pc, ça flingue un peu les performances du sites, on le voit sur les animations */}
        <div className={styles.tel}>{GetStarGroup(20)}</div>
        <div className={styles.tablette}>{GetStarGroup(20)}</div>
        <div className={styles.pc}>{GetStarGroup(20)}</div>
    </main>  
    )
}