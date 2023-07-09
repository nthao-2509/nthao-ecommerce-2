import React from "react";
import { BestsellerProductStyled } from "./styles/BestsellerProductStyle";
import Container from "./Container";
import Card from "./Card";

const BestsellerProduct = () => {
  return (
    <BestsellerProductStyled>
      <Container>
        <div className='title'>
          <h3>Bestseller Products</h3>
        </div>
        <div className='cards'>
          {Array.from({ length: 8 })?.map((item: any, key: number) => (
            <Card
              title='Graphic Design'
              image={`/images/product-${key + 1}.png`}
              description='English Department'
              colors={["#23A6F0", "#23856D", "#E77C40", "#252B42"]}
              newProduct={false}
              sale={false}
              newPrice='16.48'
              oldPrice='6.48'
              key={key}
              href='/shop/detail-product-demo'
            />
          ))}
        </div>
      </Container>
    </BestsellerProductStyled>
  );
};

export default BestsellerProduct;
