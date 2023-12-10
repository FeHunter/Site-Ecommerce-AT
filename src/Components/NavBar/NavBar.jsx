import style from './NavBar.module.css';

export function NavBar() {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.itemList}>
          <a>Home</a>
        </li>
        <li className={style.itemList}>
          <a>Produtos</a>
        </li>
        <li className={style.itemList}>
          <a>Sobre nós</a>
        </li>
        <li className={style.itemList}>
          <a>Contato</a>
        </li>
      </ul>
      <span className={style.toggle}>=</span>
    </nav>
  );
}
