"use client"

import { useState } from 'react';
import styles from './Doors.module.css';
import { DoorState, DoorsAnimation } from './DoorsAnimations';
import Navigation from './navigation/navigation';


export default function Doors() {
    const [doorState, setDoorState] = useState<DoorState>(DoorState.Initial);
    const [doorIsMoving, setDoorIsMoving] = useState<boolean>(false);
    const leftDoor = new DoorsAnimation(styles.openLeftAnimation,styles.closeLeftAnimation);
    const rightDoor = new DoorsAnimation(styles.openRightAnimation,styles.closeRightAnimation);
    const locker = new DoorsAnimation(styles.openLockerAnimation,styles.closeLockerAnimation);


    const handleLockerClick = () => {  
        if (!doorIsMoving) {
            setDoorIsMoving(true);
            setDoorState(doorState === DoorState.Open ? DoorState.Close : DoorState.Open);
            setTimeout(() => setDoorIsMoving(false),3000);
        }  
    }
    function lockerDisplayContent() {
        if (doorIsMoving) {
            return "";
        }  
        else {
           return doorState === DoorState.Open ? "CLOSE" : "OPEN";
        }
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.leftDoor} ${leftDoor.SelectStyle(doorState)}`}>
                <Navigation/>
            </div>
            <div className={`${styles.rightDoor} ${rightDoor.SelectStyle(doorState)}`}>
                <button onClick={handleLockerClick} className={`${styles.doorLocker} ${locker.SelectStyle(doorState)}`} >
                    <p>{lockerDisplayContent()}</p>
                </button>
            </div>
        </div>
    )
}