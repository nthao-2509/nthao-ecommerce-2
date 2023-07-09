import DetailProduct from "components/clients/detailProductComponents";
import ReactQuillTest from "reactQuill";
import ClientView from "views/clients";
import ShopViews from "views/clients/Shop";
import AboutView from "views/clients/about";
import BlogView from "views/clients/blog";
import ContactView from "views/clients/contact";
import HomePageView from "views/clients/homePages";

export const ClientRoutes = [
  {
    name: "home-page",
    path: "",
    icon: undefined,
    layout: "/",
    component: <ClientView />,
    views: [
      {
        name: "home-page",
        path: "",
        icon: undefined,
        layout: "/",
        component: <HomePageView />,
      },
      {
        name: "shop-views",
        path: "/shop",
        icon: undefined,
        layout: "/",
        component: <ShopViews />,
      },
      {
        name: "detail product",
        path: "/shop/:slugProduct",
        icon: undefined,
        layout: "/",
        component: <DetailProduct />,
      },
      {
        name: "about-view",
        path: "/about",
        icon: undefined,
        layout: "/",
        component: <AboutView />,
      },
      {
        name: "blog-view",
        path: "/blog",
        icon: undefined,
        layout: "/",
        component: <BlogView />,
      },
      {
        name: "contact-view",
        path: "/contact",
        icon: undefined,
        layout: "/",
        component: <ContactView />,
      },
      //
      {
        name: "123 product",
        path: "/test",
        icon: undefined,
        layout: "/",
        component: <ReactQuillTest />,
      },
    ],
  },
];
