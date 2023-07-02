import React from "react";
import { BannerFeatureStyle } from "../styleComponents/BannerFeatureStyle";

const BannerFeatureProduct = () => {
  const datafake = [
    {
      image: ["banner-feature-product-1.png", "banner-feature-product-2.png"],
      heading: "Feature Products",
      title: "We love what we do",
      description:
        "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics. Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ",
    },
  ];
  return (
    <BannerFeatureStyle>
      <div className='left'>
        {datafake?.[0].image.map((item: string, key: number) => (
          <img src={`/images/${item}`} alt={`${key}`} key={key} />
        ))}
      </div>
      <div className='right'>
        <div className='heading'>
          <h5>{datafake?.[0].heading}</h5>
        </div>
        <div className='title'>
          <h2>{datafake?.[0].title}</h2>
        </div>
        <div className='description'>
          <p>{datafake?.[0].description}</p>
        </div>
      </div>
    </BannerFeatureStyle>
  );
};

export default BannerFeatureProduct;
