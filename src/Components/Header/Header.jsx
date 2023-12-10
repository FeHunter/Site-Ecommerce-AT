import { useState } from 'react';
import style from './Header.module.css';

export function Header({ title, logoURL, logoAlt }) {
  const [visible, setVisible] = useState(false);
  const status = visible
    ? { display: 'flex', position: 'absolute', top: '10%', transition: '1s' }
    : { display: 'none', position: 'relative', transition: '1s' };
  return (
    <header className={style.header}>
      <div className={style.fixedMenu}>
        <img src={logoURL} alt={logoAlt} />
        <h1>{title}</h1>
        <span className={style.toggle} onClick={() => setVisible(!visible)}>
          =
        </span>
      </div>
      <div className={style.expandi} style={status}>
        <nav>
          <ul>
            <li>
              <a className={style.link}>Home</a>
            </li>
            <li>
              <a className={style.link} href="#ContactUs">
                Serviços
              </a>
            </li>
            <li>
              <a className={style.link} href="#Products">
                Products
              </a>
            </li>
            <li>
              <a className={style.link} href="#AboutUs">
                About us
              </a>
            </li>
            <li>
              <a className={style.link} href="#ContactUs">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
