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

    function switchClassAnimation(isLeftDoor:boolean) {
        switch (doorState) {
            case DoorState.Initial : return  '';
            case  DoorState.Open : return isLeftDoor ? styles.openLeftAnimation : styles.openRightAnimation;
            case  DoorState.Close : return isLeftDoor ? styles.closeLeftAnimation : styles.closeRightAnimation;
        }
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.leftDoor} ${switchClassAnimation(true)}`}></div>
            <div className={`${styles.rightDoor} ${switchClassAnimation(false)}`}>
                <button onClick={handleLockerClick} className={`${styles.doorLocker} ${doorState === DoorState.Initial ? '' : doorState === DoorState.Open ? styles.openLockerAnimation : styles.closeLockerAnimation}`} />
            </div>
        </div>
    )
}