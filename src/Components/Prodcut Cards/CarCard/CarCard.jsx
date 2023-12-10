import style from './CarCard.module.css';

export function CarCard({ imgURL, name, contentText, price }) {
  return (
    <div className={style.productCard}>
      <img src={imgURL} alt={`${name} image`} className={style.productImage} />
      <div className={style.productInfo}>
        <h2 className={style.productTitle}>{name}</h2>
        <p>{contentText}</p>
        <span>{price}</span>
        <div className={style.productCardButtons}>
          <button className={style.buyCarButton}>Buy Car</button>
        </div>
      </div>
    </div>
  );
}
