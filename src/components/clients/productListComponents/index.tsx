import React from "react";
import { ProductListStyled } from "./styles/style";
import Container from "../Container";
import Card from "../Card";
import { Select } from "antd";
import BannerTop from "./BannerTop";
import PaginationCustom from "../Pagination";
import Brands from "../Brands";

const ProductList = () => {
  const [viewCards, setViewCards] = React.useState<"grid" | "list">("grid");

  const OptionFilterProduct = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
    { value: "Option 4", label: "Option 4" },
  ];
  return (
    <ProductListStyled viewCard={viewCards}>
      <BannerTop />
      <Container>
        <div className='top'>
          <div className='top__left'>
            <h5>Showing all 12 results</h5>
          </div>
          <div className='top__center'>
            <h5>Views:</h5>
            <i
              className={`fa-solid fa-grip ${
                viewCards === "grid" ? "active" : " "
              }`}
              onClick={() => setViewCards("grid")}
            />
            <i
              className={`fa-solid fa-list-ul ${
                viewCards === "list" ? "active" : " "
              }`}
              onClick={() => setViewCards("list")}
            />
          </div>
          <div className='top__right'>
            <Select
              defaultValue='Popularity'
              options={OptionFilterProduct}
              style={{ width: 120 }}
            />
            <button className='button__filter'>Filter</button>
          </div>
        </div>
        <div className='cards'>
          {Array.from({ length: 20 }).map((item: any, key: number) => (
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
              view={viewCards}
              href='/shop/detail-product-demo'
            />
          ))}
        </div>
        <PaginationCustom />
      </Container>
      <Brands />
    </ProductListStyled>
  );
};

export default ProductList;
