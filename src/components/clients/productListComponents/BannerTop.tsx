import React from "react";
import Breadcrumb from "../Breadcrumb";
import { BannerTopStyled } from "./styles/style";
import Container from "../Container";

const BannerTop = () => {
  return (
    <BannerTopStyled>
      <Container>
        <Breadcrumb
          title='Shop'
          breadcrumb={[
            {
              text: "Home",
              href: "/",
            },
            {
              text: "Shop",
              href: undefined,
            },
          ]}
        />
        <div className='banner'>
          {Array.from({ length: 5 }).map((item: any, key: number) => (
            <div className='item' key={key}>
              <img
                src={`/images/card-cover-${key + 1}.jpg`}
                alt={`${key}`}
                className='image'
              />
              <div className='content'>
                <h3>CLOTHS</h3>
                <p>5 Items</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </BannerTopStyled>
  );
};

export default BannerTop;
