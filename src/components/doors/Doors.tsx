"use client"

import { useState } from 'react';
import styles from './Doors.module.css';

export enum DoorState {
    Initial,
    Open,
    Close
};

export default function Doors() {
    const [doorState, setDoorState] = useState<DoorState>(DoorState.Initial);

    const handleLockerClick = () => {
        if (doorState === DoorState.Initial)
            setDoorState(DoorState.Open);
        else
            setDoorState(doorState === DoorState.Open ? DoorState.Close : DoorState.Open);
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.leftDoor} ${doorState == DoorState.Initial ? '' : doorState === DoorState.Open ? styles.openLeftAnimation : styles.closeLeftAnimation}`}></div>
            <div className={`${styles.rightDoor} ${doorState === DoorState.Initial ? '' : doorState === DoorState.Open ? styles.openRightAnimation : styles.closeRightAnimation}`}>
                <button onClick={handleLockerClick} className={`${styles.doorLocker} ${doorState === DoorState.Initial ? '' : doorState === DoorState.Open ? styles.openLockerAnimation : styles.closeLockerAnimation}`} />
            </div>
        </div>
    )
}