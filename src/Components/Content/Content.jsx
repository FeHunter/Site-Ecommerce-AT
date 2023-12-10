import { ItemsContend } from '../../Components/Content/ItemsContend/ItemsContend.jsx';
import { ProductContend } from '../../Components/Content/ProductContend/ProductContend.jsx';
import { SellerInfo } from '../../Components/Content/SellerInfo/SellerInfo.jsx';
import { CarsSliderShow } from '../../Components/Sliders/CarsSliderShow/CarsSliderShow.jsx';
import { SliderImg } from '../../Components/Sliders/Slider/SliderImg';
import style from './Content.module.css';

export function Content() {
  return (
    <main className={style.main}>
      <div className={style.mainContent}>
        <SliderImg />
        <ProductContend width="100%">
          <CarsSliderShow />
        </ProductContend>
        <ItemsContend />
        <SellerInfo />
      </div>
    </main>
  );
}
