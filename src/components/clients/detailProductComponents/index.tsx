import Container from "../Container";
import Breadcrumb from "../Breadcrumb";
import { DetailProductStyled } from "./styles/style";
import Brands from "../Brands";
import ImageDetailProduct from "./ImageDetailProduct";
import InformationProduct from "./InformationProduct";
import { Tabs, TabsProps } from "antd";
import Description from "./contentTabs/Description";
import Information from "./contentTabs/Information";
import Review from "./contentTabs/Review";
import ContentTabs from "./contentTabs";
import {
  DataContentTabs_Description,
  DataContentTabs_Information,
} from "modules/data-fake";
import Colors from "modules/Colors";
import BestsellerProduct from "../BestsellerProduct";
import Bandage from "../homeComponents/Bandage";

const DetailProduct = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Description`,
      children: <ContentTabs dataContent={DataContentTabs_Description} />,
    },
    {
      key: "2",
      label: `Additional Information`,
      children: <ContentTabs dataContent={DataContentTabs_Information} />,
    },
    // {
    //   key: "3",
    //   label: (
    //     <div>
    //       <span>Reviews</span>{" "}
    //       <span
    //         style={{
    //           color: Colors.primaryColor,
    //         }}
    //       >
    //         ̣(0)
    //       </span>
    //     </div>
    //   ),
    //   children: <Review />,
    // },
  ];
  return (
    <DetailProductStyled>
      <div className='container'>
        <Container>
          <Breadcrumb
            breadcrumb={[
              { text: "Home", href: "/" },
              { text: "Shop", href: "/shop" },
              { text: "Product Name", href: undefined },
            ]}
          />
          {/* content */}
          <div className='content'>
            <div className='product__detail'>
              <div className='left'>
                <ImageDetailProduct />
              </div>
              <div className='right'>
                <InformationProduct />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className='description'>
        <Container>
          <Tabs
            className='tabs'
            defaultActiveKey='1'
            items={items}
            onChange={onChange}
          />
        </Container>
      </div>
      <div className='bestseller'></div>
      <BestsellerProduct />
      <Brands backgroundColor={Colors.lightGray1} />
      <Bandage borderBottom={true} backgroundColor={Colors.white} />
    </DetailProductStyled>
  );
};

export default DetailProduct;
