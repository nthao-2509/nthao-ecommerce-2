import React from "react";
import Container from "./Container";
import { CarouselStyle } from "./styleComponents/CarouselStyle";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  return (
    <CarouselStyle>
      <div className='content'>
        <div className='content__left'>
          <div className='year'>
            <h5>Summer 2020</h5>
          </div>
          <div className='title'>
            <h1>New Collection</h1>
          </div>
          <div className='description'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eligendi similique laudantium? Fuga ad rem reiciendis perspiciatis
            </p>
          </div>
          <div className='button'>
            <NavLink to={"#"} className='see-more'>
              Shop Now
            </NavLink>
          </div>
        </div>
        <div className='content__right'>
          <div className='shape'></div>
          <div className='shape'></div>
          <div className='shape'></div>
          <div className='shape'></div>
          <img src='/images/carousel-1.png' alt='carousel-1' />
        </div>
      </div>
    </CarouselStyle>
  );
};

export default Carousel;
