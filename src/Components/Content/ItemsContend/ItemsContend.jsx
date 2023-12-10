import { Comments } from '../../../Components/Prodcut Cards/ItemsCard/Comments/Comments';
import { Faq } from '../../../Components/Prodcut Cards/ItemsCard/Faq/Faq';
import { ItemsCard } from '../../../Components/Prodcut Cards/ItemsCard/ItemsCard';
import { RelatedProducts } from '../../../Components/Prodcut Cards/ItemsCard/RelatedProducts/RelatedProducts';
import { SellerDetail } from '../../../Components/Prodcut Cards/ItemsCard/SellerDetails/SellerDetails';
import style from './ItemsContend.module.css';

export function ItemsContend() {
  const images = {
    ParkingSensor: 'https://img.jocar.com.br/709512_250.jpg',
    EngineOil: 'https://img.jocar.com.br/705828_1000.jpg',
    GlassMachineMotor: 'https://img.jocar.com.br/704999_1000.jpg',
    Sparkplug:
      'https://images-americanas.b2w.io/produtos/1868638308/imagens/vela-ignicao-resistiva-ngk-palio-uno-siena-vectra-palio-weekend-fiorino/1868638308_1_large.jpg',
    AirCompressor:
      'https://cdn.pkwteile.de/thumb/assets/ersatz_categories/200x200/69.jpg',
    InjectionPump:
      'https://cdn.pkwteile.de/thumb/assets/ersatz_categories/200x200/284.jpg',
  };
  return (
    <div className={style.ItemContend} id="Products">
      <ItemsCard
        name="Parking Sensor"
        text="The function of the parking sensor is to assist with parking maneuvers."
        price={520}
        rate={5}
        img={images.ParkingSensor}
        sellerInfos={
          <SellerDetail
            name="Fabio Ventturri"
            email="fabiolambor@email.com"
            phone="191234-5678"
            rate={4}
          />
        }
        faq={
          <Faq
            name="Milton"
            date="10/04/2001"
            mensage="Hello! This sensor is compatibly with the gallardo?"
            answer="Hi, Milton! Yeah it works with Gallardo."
          />
        }
        relatedProducts={[
          <RelatedProducts
            name="Engine Oil"
            img={images.EngineOil}
            price={49}
          />,
          <RelatedProducts
            name="Glass Machine Motor"
            img={images.GlassMachineMotor}
            price={326}
          />,
        ]}
        comments={[
          <Comments
            name="Milton"
            date="12/04/2001"
            mensage="This sensor is very helpful."
            rate={5}
          />,
          <Comments
            name="Max"
            date="15/06/2001"
            mensage="Thanks it works very well!"
            rate={5}
          />,
        ]}
      />
      <ItemsCard
        name="Engine Oil"
        text="State-of-the-art multi viscosity mineral oil specially formulated for protection in severe conditions such as heavy traffic."
        price={49}
        rate={3}
        img={images.EngineOil}
        sellerInfos={
          <SellerDetail
            name="Felipe Sett"
            email="felipelambor@email.com"
            phone="191234-5678"
            rate={5}
          />
        }
        faq={
          <Faq
            name="Raphael"
            date="5/04/2001"
            mensage="Hi! Is this oil really good?"
            answer="Hello, Raphael! Yes this one the best oil for Lamborghini."
          />
        }
        relatedProducts={[
          <RelatedProducts
            name="Air Compressor"
            img={images.AirCompressor}
            price={340}
          />,
          <RelatedProducts
            name="Injection Pump"
            img={images.InjectionPump}
            price={735}
          />,
        ]}
        comments={[
          <Comments
            name="Carlos"
            date="26/03/2001"
            mensage="Very happy with this oil, works pretty well on my gallardo!"
            rate={5}
          />,
          <Comments
            name="Max"
            date="15/06/2001"
            mensage="Great oil, work very well!"
            rate={5}
          />,
        ]}
      />
      <ItemsCard
        name="Glass Machine Motor"
        text="Universal door window motor."
        rate={4}
        price={326}
        img={images.GlassMachineMotor}
        sellerInfos={
          <SellerDetail
            name="Leonardde Matti"
            email="leomlambor@email.com"
            phone="191234-5678"
            rate={5}
          />
        }
        faq={
          <Faq
            name="John"
            date="23/02/2002"
            mensage="This work with Aventador?"
            answer="Hi, yeah it work."
          />
        }
        relatedProducts={[
          <RelatedProducts
            name="Parking Sensor"
            img={images.ParkingSensor}
            price={520}
          />,
          <RelatedProducts
            name="Engine Oil"
            img={images.EngineOil}
            price={49}
          />,
          <RelatedProducts
            name="Injection Pump"
            img={images.InjectionPump}
            price={735}
          />,
        ]}
        comments={[
          <Comments
            name="John"
            date="26/02/2002"
            mensage="It saved my window!"
            rate={5}
          />,
          <Comments
            name="Max"
            date="10/04/2002"
            mensage="It didn't work very well with my Ferrari!"
            rate={2}
          />,
        ]}
      />
      <ItemsCard
        name="Spark plug"
        text="Spark plug."
        rate={5}
        price={178}
        img={images.Sparkplug}
        sellerInfos={
          <SellerDetail
            name="Estter L."
            email="esterlambor@email.com"
            phone="191234-5678"
            rate={5}
          />
        }
        faq={
          <Faq
            name="Sergio"
            date="11/05/2005"
            mensage="It work with countach?"
            answer="Hi, yeah it work."
          />
        }
        relatedProducts={[
          <RelatedProducts
            name="Injection Pump"
            img={images.InjectionPump}
            price={735}
          />,
        ]}
        comments={[
          <Comments
            name="Lando"
            date="10/04/2002"
            mensage="It didn't solve my problem!"
            rate={1}
          />,
          <Comments
            name="Sergio"
            date="12/05/2005"
            mensage="It saved my Countach!"
            rate={5}
          />,
        ]}
      />
      <ItemsCard
        name="Air Compressor"
        text="Air conditioning compressor."
        rate={3}
        price={340}
        img={images.AirCompressor}
        sellerInfos={
          <SellerDetail
            name="Damiano Vetti"
            email="damianlambor@email.com"
            phone="191234-5678"
            rate={3}
          />
        }
        faq={
          <Faq
            name="Matt S."
            date="11/05/2005"
            mensage="It work with gallardo?"
            answer="Hi, yeah it work."
          />
        }
        relatedProducts={[
          <RelatedProducts
            name="Engine Oil"
            img={images.EngineOil}
            price={49}
          />,
        ]}
        comments={[
          <Comments
            name="Sebastian"
            date="10/04/2002"
            mensage="After three months it stopped working, very sad!"
            rate={2}
          />,
          <Comments
            name="Matt S."
            date="12/05/2005"
            mensage="It work pretty well on my Gallardo!"
            rate={5}
          />,
        ]}
      />
      <ItemsCard
        name="Injection Pump"
        text="Injection Pump."
        rate={2}
        price={735}
        img={images.InjectionPump}
        sellerInfos={
          <SellerDetail
            name="Damiano Vetti"
            email="damianlambor@email.com"
            phone="191234-5678"
            rate={3}
          />
        }
        faq={
          <Faq
            name="David Tentt"
            date="11/05/2005"
            mensage="It work with Diablo?"
            answer="Hi, yeah it work."
          />
        }
        relatedProducts={[
          <RelatedProducts
            name="Air Compressor"
            img={images.AirCompressor}
            price={340}
          />,
          <RelatedProducts
            name="Spark Plug"
            img={images.Sparkplug}
            price={178}
          />,
          <RelatedProducts
            name="Parking Sensor"
            img={images.ParkingSensor}
            price={250}
          />,
        ]}
        comments={[
          <Comments
            name="David Tentt"
            date="12/05/2005"
            mensage="Thanks!! Now my car is brand new.."
            rate={5}
          />,
        ]}
      />
    </div>
  );
}
