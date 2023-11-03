import MuseeButtons from './museeButtons/museeButtons'
import { MuseeFilter } from './museeFilters'
import styles from './museeHeader.module.css'

export default function MuseeHeader() {
  const UniversFilter = new MuseeFilter('Univers',['One Piece','Demon Slayer','One PunchMan','Jujutsu Kaisen'],undefined);
  const TypeFilter = new MuseeFilter('Type',['Livres','Poster','Figurines','Goodies'],undefined);
  const TrierFilter = new MuseeFilter('Trier par',['Univers','Type','Date','Prix'],undefined);
  const ResetFilter = new MuseeFilter('Reset',[],undefined);
  const AjouterFilter = new MuseeFilter('Ajouter',[],undefined);
  
  const handleReset = () => {
    UniversFilter.ActualValue = undefined;
    TypeFilter.ActualValue = undefined;
    TrierFilter.ActualValue = undefined;
  }

  return (
    <main className={styles.container}>
        <MuseeButtons filter={UniversFilter}/>
        <MuseeButtons filter={TypeFilter}/>
        <MuseeButtons filter={TrierFilter}/>
        <MuseeButtons filter={ResetFilter}/>
        <MuseeButtons filter={AjouterFilter}/>
    </main>
  )
}
