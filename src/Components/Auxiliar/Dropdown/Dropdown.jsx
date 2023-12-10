import { useState } from 'react';
import style from './Dropdown.module.css';

export function DropDown({ title, viewMode, children }) {
  const [visible, setVisible] = useState(viewMode ? true : false);
  let view = visible ? { display: 'flex' } : { display: 'none' };
  let toggleTxt = visible ? 'x' : '=';
  return (
    <div className={style.dropDownContainer}>
      <span
        className={style.upContainer}
        onClick={() => setVisible((visible) => !visible)}
      >
        <p>{title}</p>
        <p className={style.toggle}>{toggleTxt}</p>
      </span>
      <span className={style.downContainer} style={view}>
        {children}
      </span>
    </div>
  );
}
