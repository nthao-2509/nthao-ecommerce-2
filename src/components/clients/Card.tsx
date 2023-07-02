import React from "react";
import { StyleCard } from "./styled/CardStyled";

type Props = {
  image: string;
  title: string;
  description: string;
  oldPrice: string;
  newPrice: string;
  colors: string[];
  sale: boolean;
  newProduct: boolean;
  key: number | string;
};

const Card = ({
  image,
  title,
  description,
  oldPrice,
  newPrice,
  colors,
  sale,
  newProduct,
  key,
}: Props) => {
  return (
    <div key={key}>
      <StyleCard>
        <div className='image' key={key}>
          <img src={image} alt={title} />
        </div>
        <div className='content'>
          <div className='title'>
            <h5>{title}</h5>
          </div>
          <div className='description'>
            <p>{description}</p>
          </div>
          <div className='price'>
            <del className='price__old'>${oldPrice}</del>
            <p className='price__new'>${newPrice}</p>
          </div>
          <div className='colors'>
            <ul>
              {colors?.map((color: string, index: number) => (
                <li style={{ backgroundColor: color }} key={index}></li>
              ))}
            </ul>
          </div>
        </div>
      </StyleCard>
    </div>
  );
};

export default Card;
