import { useEffect, useState } from 'react';
import style from './Comments.module.css';

export function Comments({ name, date, mensage, rate }) {
  let rateColor = rate < 3 ? { color: 'red' } : { color: 'green' };

  return (
    <div className={style.container}>
      <span className={style.UpContainer}>
        <p>{name}</p>
        <p>{date}</p>
      </span>
      <span className={style.downContainer}>
        <p className={style.mensage}>{mensage}</p>
        <p style={rateColor}>Rate: {rate}/5</p>
      </span>
    </div>
  );
}
