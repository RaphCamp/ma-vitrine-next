'use client'
import { useState } from 'react';
import styles from './museeButtons.module.css'
import { MuseeFilter } from '../museeFilters';

interface MuseeButtonsProps {
   filter : MuseeFilter;
}

export default function MuseeButtons(props:MuseeButtonsProps) {
  const handleClick = (value:string) => {
    props.filter.ActualValue = value;
  } 
  return (
    <main onClick={() => props.filter.OnclickEvent} className={`${styles.container} ${props.filter.Values.length !== 0 ? styles.containerDropDown:''}`}>
      <h1>{props.filter.Title}</h1>
      <h2>{props.filter.ActualValue}</h2>
      <div className={styles.liste}>
        {props.filter.Values.map((value:string) => (
          <p onClick={() => handleClick(value)} key={value}>{value}</p>
        ))}
      </div>
    </main>
  )
}
