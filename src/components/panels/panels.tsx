"use client"
import { useEffect, useRef, useState } from 'react';
import styles from './panels.module.css';
import { time, timeEnd } from 'console';

export default function Panels() {
    const [panelsOpen,setPanelsOpen] = useState<boolean>(true);
    const [panelsMoving,setpanelsMoving] = useState<boolean>(false);
    function panelsAreMoving() {
        setpanelsMoving(true);
        setTimeout(() => setpanelsMoving(false),4000);
    }
    function movePanels () {
        if (!panelsMoving) {
            setPanelsOpen(!panelsOpen)
            panelsAreMoving();
        }
    }
        return (
        <main className={styles.total}>
            <div className={styles.top}>
                <div className={styles.button} onClick={()=> movePanels()}  style={{backgroundColor: panelsOpen? `green`:`red`}}></div>
            </div>
            <div className={styles.panels}>
                <div className={panelsOpen? styles.openLeftPanel : styles.closeLeftPanel}></div>
                <div className={panelsOpen? styles.openRightPanel : styles.closeRightPanel}></div>
            </div>
        </main>
    )
}
