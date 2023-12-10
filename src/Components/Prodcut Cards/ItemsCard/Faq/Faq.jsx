import style from './Faq.module.css';

export function Faq({ name, date, mensage, answer }) {
  return (
    <div className={style.container}>
      <span className={style.UpContainer}>
        <p>{name}</p>
        <p>{date}</p>
      </span>
      <p style={{ fontStyle: 'italic' }}>Doubt:</p>
      <span className={style.doubt}>
        <p>{mensage}</p>
      </span>
      <p style={{ fontStyle: 'italic' }}>Answer:</p>
      <span>
        <p className={style.asnwer}>{answer}</p>
      </span>
    </div>
  );
}
