import { useState } from 'react';
import { SellerDetail } from '../../../Components/Prodcut Cards/ItemsCard/SellerDetails/SellerDetails';
import style from './ItemsCard.module.css';
import { Comments } from '../../../Components/Prodcut Cards/ItemsCard/Comments/Comments';
import { RelatedProducts } from '../../../Components/Prodcut Cards/ItemsCard/RelatedProducts/RelatedProducts';
import { DropDown } from '../../../Components/Auxiliar/Dropdown/Dropdown';

export function ItemsCard({
  name,
  text,
  rate,
  price,
  img,
  sellerInfos,
  relatedProducts,
  faq,
  comments,
}) {
  // Show and hide, Seller panel
  const [details, setDetails] = useState(false);
  let asideVisible = details ? style.asideContainer : style.asideContainerHie;
  let showAsideBar = details ? style.itemCardViewDetails : style.itemCard;
  let MainContendClass = details ? style.hideMainContent : style.mainContainer;

  return (
    <article className={style.cardArea}>
      <div className={showAsideBar}>
        <div className={MainContendClass}>
          <h2 className={style.cardItemName}>{name}</h2>
          <span className={style.cardInfo}>
            <img
              src={img}
              alt={`${name} image`}
              className={style.cardItemImage}
            />
            <p className={style.cardText}>{text}</p>
          </span>
          <span className={style.cardButtons}>
            <p>{`Rate: ${rate}/5`}</p>
            <span>{`R$${price},00`}</span>
            <button
              onClick={() => setDetails((details) => !details)}
              className={style.toggleButton}
            >
              Details
            </button>
          </span>
        </div>
        <div className={asideVisible}>
          <h2 className={style.cardItemName}>{name}</h2>
          {/* Informações do vendedor */}
          <span className={style.asideSeller}>{sellerInfos}</span>
          {/* Comentarios */}
          <div style={{ width: '100%' }}>
            <DropDown title="Comentários">{comments}</DropDown>
          </div>
          {/* Produtos Relacionados */}
          <DropDown title="Related Products" viewMode={true}>
            <div className={style.RelatedProductArea}>{relatedProducts}</div>
          </DropDown>
          {/* Perguntas sobre o produto */}
          <DropDown title="FAQ">
            <div>{faq}</div>
          </DropDown>

          {/* Botão de fechar no mobile */}
          <button
            onClick={() => setDetails((details) => !details)}
            className={style.toggleButtonMobile}
          >
            Back
          </button>
        </div>
        {/* <ProductLook /> */}
      </div>
    </article>
  );
}
