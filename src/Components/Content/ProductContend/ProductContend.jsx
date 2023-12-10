import style from './ProductContend.module.css';

export function ProductContend({ children, width, height, padding, margin }) {
  let size = {
    width: width,
    height: height,
    padding: padding,
    margin: margin,
  };
  return (
    <div className={style.productContend} style={size}>
      {children}
    </div>
  );
}
