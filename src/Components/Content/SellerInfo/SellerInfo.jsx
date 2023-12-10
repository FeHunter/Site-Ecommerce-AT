import { createFactory, useInsertionEffect } from 'react';
import style from './SellerInfo.module.css';
import { InfoCard } from '../../../Components/Prodcut Cards/InfoCard/InfoCard';

export function SellerInfo() {
  const images = {
    factory:
      'https://cdn-ds.com/media/websites/2917/content/LowresIMG_3360_Sunset.jpg?s=283076',
    Furrucio:
      'https://movieplayer.net-cdn.it/t/images/2015/12/29/ferruccio-lamborghini-miura-rossa_jpg_750x400_crop_q85.jpg',
  };
  return (
    <div className={style.container} id="AboutUs">
      <p>About the seller</p>
      <div className={style.info}>
        <InfoCard
          img={images.factory}
          text="Nossa loja e dedicada a lamborghinis, aqui você encontra todas as peças para manter sua lambor em dia."
        />
        <InfoCard
          img={images.Furrucio}
          text="Nossa loja e dedicada a lamborghinis, aqui você encontra todas as peças para manter sua lambor em dia."
        />
      </div>
    </div>
  );
}
