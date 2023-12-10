import style from './SellerDetails.module.css';

export function SellerDetail({ name, email, phone, rate }) {
  const perfil =
    'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Picture.png';
  return (
    <div className={style.sellerDetails}>
      <img src={perfil} alt="perfil logo" className={style.sellerPerfil} />
      <span>
        <p className={style.sellerTitle}>Informações do Vendedor</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Rate: {rate < 5 ? rate : 5}/5</p>
      </span>
    </div>
  );
}
