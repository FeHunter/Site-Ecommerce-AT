import style from './RelatedProducts.module.css';

export function RelatedProducts({ name, img, price }) {
  return (
    <div className={style.container}>
      <img src={img} alt={`${name} image`} className={style.image} />
      <div className={style.info}>
        <p>{name}</p>
        <p>R${price},00</p>
      </div>
    </div>
  );
}
