"use client"
import { useEffect, useRef, useState } from 'react';
import styles from './panels.module.css';

enum panelsStatus {
    Initial,
    Open,
    Close
}
enum panelsMoves {
    NotMoving,
    Openning,
    Closing
}

export default function Panels() {
    const [panelStatu,setPanelsStatu] = useState<panelsStatus>(panelsStatus.Initial);
    const [panelsMove,setpanelsMove] = useState<panelsMoves>(panelsMoves.NotMoving);
    const [lockingPanel, setLockingPanel ] = useState<boolean>(false);
    function movePanels () {
        if (panelsMove == panelsMoves.NotMoving) {
            switch (panelStatu) {
                case panelsStatus.Open:
                    setpanelsMove(panelsMoves.Closing);
                    setTimeout(() => setLockingPanel(true),4000);
                    setTimeout(() => stopMove(),6000);
                    break;
                case panelsStatus.Close:
                    setLockingPanel(true);
                    setTimeout(() => setpanelsMove(panelsMoves.Openning),2000);
                    setTimeout(() => stopMove(),6000);
                    break;
                    case panelsStatus.Initial :
                        setPanelsStatu(panelsStatus.Open);
                    break;
                default: break;
            }
        }
    }
    function stopMove() {
        if(panelsMove == panelsMoves.Closing) {
            console.log(panelsMove);
            setPanelsStatu(panelsStatus.Close);
        } else {
            setPanelsStatu(panelsStatus.Open);
        }
        setpanelsMove(panelsMoves.NotMoving);
        setLockingPanel(false);
        console.log(panelStatu);
        console.log(panelsMove);
    }
    function setPanelId(leftPanel:boolean)
    {
        if(panelStatu != panelsStatus.Initial) {
            switch (panelsMove) {
                case panelsMoves.Openning: return leftPanel ? styles.openLeftPanel : styles.openRightPanel;
                case panelsMoves.Closing: return leftPanel ? styles.closeLeftPanel : styles.closeRightPanel;
                default:break;
            }
        }
        else {
            return styles.initialPanel;
        }
    }
        return (
        <main className={styles.total}>
            <div className={styles.top}>
                <div className={styles.button} onClick={()=> movePanels()}  style={{backgroundColor: panelsMove != panelsMoves.NotMoving ? `red`:`green`}}>
                    <p>{panelStatu == panelsStatus.Open ? "Close" : "Open"}</p>
                </div>
            </div>
            <div className={styles.panels}>
                <div id={styles.panel} className={setPanelId(true)}></div>
                <div id={styles.panel} className={setPanelId(false)}>
                    <div className={styles.verrou} id={lockingPanel? styles.verrouAction :styles.verroudAction}></div>
                </div>
            </div>
        </main>
    )
}
