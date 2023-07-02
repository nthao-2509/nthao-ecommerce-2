import React from "react";
import { FeatureStyle } from "../styleComponents/FeatureStyle";
import Container from "../Container";
import Card from "../Card";

const FeaturedProducts = () => {
  return (
    <FeatureStyle>
      <Container>
        <div className='feature'>
          <div className='feature__top'>
            <div className='heading'>
              <h2>Feature Products</h2>
            </div>
            <div className='title'>
              <h3>BESTSELLER PRODUCTS</h3>
            </div>
            <div className='description'>
              <p>Problems trying to resolve the conflict between </p>
            </div>
          </div>
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
            />
          ))}
        </div>
        <div className='button'>
          <a href=''>Load more products</a>
        </div>
      </Container>
    </FeatureStyle>
  );
};

export default FeaturedProducts;
