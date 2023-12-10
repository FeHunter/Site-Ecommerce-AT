import style from './Footer.module.css';

export function Footer() {
  const logo =
    'https://pngimg.com/uploads/lamborghini/lamborghini_PNG10709.png';
  return (
    <footer className={style.footer} id="ContactUs">
      <div className={style.infosBlocks}>
        <img src={logo} alt="lamborhini logo" className={style.logo} />
        <span className={style.block}>
          <p>Contact:</p>
          <a>Email: lamborghiniStore@email.com</a>
          <a>Phone: 01 1234-5678</a>
        </span>
        <span className={style.block}>
          <p>Services:</p>
          <a>Flip Wash</a>
          <a>Show case</a>
        </span>
        <span className={style.block}>
          <a>About us</a>
          <a>Affiliates</a>
          <a>Resources</a>
        </span>
      </div>
      <div className={style.info}>
        <p>A site by &copy;Felipe R.</p>
      </div>
    </footer>
  );
}
