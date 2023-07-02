import React from "react";
import Carousel from "components/clients/Carousel";
import BannerFeatureProduct from "components/clients/homeComponents/BannerFeatureProduct";
import Collection from "components/clients/homeComponents/Collection";
import FeaturedProducts from "components/clients/homeComponents/FeaturedProducts";
import Service from "components/clients/homeComponents/Service";
import FeaturedPosts from "components/clients/homeComponents/FeaturedPosts";

const HomePageView = () => {
  return (
    <>
      <Carousel />
      <Collection />
      <FeaturedProducts />
      <BannerFeatureProduct />
      <Service />
      <FeaturedPosts />
    </>
  );
};

export default HomePageView;
