import style from './SliderImg.module.css';
import { useState } from 'react';

export function SliderImg() {
  const images = [
    'https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1920,h_1080/auto-client/ddd052485e38c12b891a37a1ca3b6981/11_03_hura_evo_fluo_family_01.png',
    'https://c.wallhere.com/photos/5c/ca/1920x1080_px_car_Gallardo_Lamborghini_Lamborghini_Gallardo_Lamborghini_Gallardo_Superleggera_LP570_Mid_engine-683521.jpg!d',
    'https://c.wallhere.com/photos/e4/7f/Lamborghini_Lamborghini_Gallardo_LP570_4_Spyder_Performante_Lamborghini_Gallardo_Lamborghini_Gallardo_LP560_4_Spyder_car_Forza_Horizon_4_Forza-1970163.jpg!d',
    'https://i.pinimg.com/originals/bd/de/f3/bddef32f41d5b0d6ce6f6ee9a8a9ec9f.jpg',
    'https://i.pinimg.com/originals/88/3b/92/883b92bf52b380a3ffae8d8c58c8807c.jpg',
    'https://www.hdcarwallpapers.com/walls/matt_balck_lamborghini-HD.jpg',
  ];
  const [index, setIndex] = useState(0);
  const [img, nextImg] = useState(images[index]);
  const NextImage = () => {
    if (index < images.length) {
      setIndex((x) => (x = index + 1));
      nextImg(images[index]);
      console.log(`Proximo index: ${index}`);
    }
  };
  const Previulsy = () => {
    if (index > 0) {
      setIndex((x) => (x = index - 1));
      nextImg(images[index]);
      console.log(`Anterior: index: ${index}`);
    }
  };
  const ChangeImg = (index) => {
    setIndex((x) => (x = index));
    nextImg(images[index]);
    console.log(`index: ${index}`);
  };
  return (
    <div className={style.galery}>
      <img src={img} className={style.image} />
      <div className={style.navegation}>
        <button onClick={Previulsy} className={style.LRbutton}>
          Back
        </button>
        {images.map((imagem, index) => (
          <img
            className={style.imgButtons}
            onClick={() => ChangeImg(index)}
            src={imagem}
          />
        ))}
        <button onClick={NextImage} className={style.LRbutton}>
          Next
        </button>
      </div>
    </div>
  );
}
