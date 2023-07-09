import React from "react";
import { FeatureStyle } from "../styleComponents/FeatureStyle";
import Container from "../Container";
import Card from "../Card";
import TopSession from "./TopSession";

const FeaturedProducts = () => {
  return (
    <FeatureStyle>
      <Container>
        <TopSession
          link={[
            {
              text: "Feature Products",
              url: "#",
            },
          ]}
          title='BESTSELLER PRODUCTS'
          description='Problems trying to resolve the conflict between'
        />
        <div className='cards'>
          {Array.from({ length: 8 })?.map((item: any, key: number) => (
            <Card
              title='Graphic Design'
              image={`/images/about-client.jpg`}
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
        <div className='button'>
          <a href=''>Load more products</a>
        </div>
      </Container>
    </FeatureStyle>
  );
};

export default FeaturedProducts;
