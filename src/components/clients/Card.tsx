import React from "react";
import { StyleCard } from "./styles/CardStyled";
import { Link, useNavigate } from "react-router-dom";

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
  href: string;
  view?: "grid" | "list";
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
  href,
  view = "grid",
}: Props) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (view === "grid") window.location.href = href;
  };
  return (
    <div key={key} onClick={handleNavigate}>
      <StyleCard view={view}>
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
          {view === "list" && (
            <Link className='read__more' to={href}>
              Read More <i className='fa-solid fa-angle-right'></i>
            </Link>
          )}
        </div>
      </StyleCard>
    </div>
  );
};

export default Card;
