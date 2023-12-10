import style from './InfoCard.module.css';

export function InfoCard({ img, text, reverse }) {
  return (
    <div className={style.contend}>
      <img src={img} className={style.image} />
      <div className={style.texto}>
        <p>{text}</p>
      </div>
    </div>
  );
}
