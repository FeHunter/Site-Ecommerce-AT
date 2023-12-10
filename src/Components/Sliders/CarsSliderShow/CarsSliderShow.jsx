import { useState } from 'react';
import { CarCard } from '../../../Components/Prodcut Cards/CarCard/CarCard';
import style from './CarsSliderShow.module.css';

export function CarsSliderShow() {
  const carsImages = {
    gallardo:
      'https://www.alfacaravan.it/wp-content/uploads/2023/01/IMG_3974-scaled.jpg',
    countach:
      'https://www.bentleygoldcoast.com/galleria_images/5428/5428_p17_l.jpg',
    aventador:
      'https://s2-autoesporte.glbimg.com/M3LP5O96N2cTgeaDSo-hWf8rxfg=/0x0:1280x853/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/X/S/SSjzBeSoaAQessJx6xJg/lambofrente.jpg',
  };

  const carsOffers = [
    <CarCard
      imgURL={carsImages.gallardo}
      name="Lamborghini Gallard"
      contentText="Lançado em 2004. É o primeiro modelo da marca equipado com motor V10, agora com 520 CV."
      price="$113,990"
    />,
    <CarCard
      imgURL={carsImages.countach}
      name="Lamborghini Countach"
      contentText="O Lamborghini Countach foi um automóvel superesportivo produzido pela Lamborghini, na Itália. O primeiro protótipo surgiu em 1971, e a produção durou até 1990."
      price="$649,951"
    />,
    <CarCard
      imgURL={carsImages.aventador}
      name="Lamborghini Aventador"
      contentText="O Aventador tem um desempenho estimado para fazer 0–100 km/h em 2,9 segundos e velocidade máxima limitada é de 350 km/h. É equipado com um motor 6.5 V12 que gera 700 cavalos."
      price="$546,847"
    />,
  ];

  const [index, setIndex] = useState(0);
  const [img, nextImg] = useState(carsOffers[index]);
  const NextImage = () => {
    if (index > 0) {
      setIndex((index) => index - 1);
      nextImg(carsOffers[index]);
    } else {
      setIndex((index) => (index = carsOffers.length - 1));
      nextImg(carsOffers[index]);
    }
  };
  const Previulsy = () => {
    if (index < carsOffers.length - 1) {
      setIndex((index) => index + 1);
      nextImg(carsOffers[index]);
    } else {
      setIndex((index) => (index = 0));
      nextImg(carsOffers[index]);
    }
  };
  return (
    // <div className={style.SliderShow}>{layout.desktop}</div>;
    <div className={style.SliderShow}>
      <button onClick={NextImage} className={style.buttonLeft}>
        {'Back'}
      </button>
      <div className={style.container}>{carsOffers[index]}</div>
      <button onClick={Previulsy} className={style.buttonRight}>
        {'Next'}
      </button>
    </div>
  );
}
