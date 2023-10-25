"use client"

import { useState } from 'react';
import styles from './Doors.module.css';
import { DoorState, DoorsAnimation } from './DoorsAnimations';
import Navigation from '../navigation/navigation';


export default function Doors() {
    const [doorState, setDoorState] = useState<DoorState>(DoorState.Initial);
    const [doorIsMoving, setDoorIsMoving] = useState<boolean>(false);
    const leftDoor = new DoorsAnimation(styles.openLeftAnimation,styles.closeLeftAnimation,styles.initialLeft);
    const rightDoor = new DoorsAnimation(styles.openRightAnimation,styles.closeRightAnimation,styles.initialRight);
    const locker = new DoorsAnimation(styles.openLockerAnimation,styles.closeLockerAnimation);
    const navBar = new DoorsAnimation(styles.upPanel,styles.downPanel,styles.upPanel);


    const handleLockerClick = () => {  
        if (!doorIsMoving) {
            setDoorIsMoving(true);
            setDoorState(doorState !== DoorState.Close ? DoorState.Close : DoorState.Open);
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
                <Navigation handleButtonClick={handleLockerClick} animation={navBar.SelectStyle(doorState)}/>
            <div className={`${styles.leftDoor} ${leftDoor.SelectStyle(doorState)}`}>
            </div>
            <div className={`${styles.rightDoor} ${rightDoor.SelectStyle(doorState)}`}>
                <button onClick={handleLockerClick} className={`${styles.doorLocker} ${locker.SelectStyle(doorState)}`} >
                    <p>{lockerDisplayContent()}</p>
                </button>
            </div>
        </div>
    )
}