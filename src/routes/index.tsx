import AddProduct from "views/admin/AddProduct";
import Customers from "views/admin/Customers";
import ListProduct from "views/admin/ListProduct";
import MainDashboard from "views/admin/MainDashboard";
import Project from "views/admin/Project";

export const RoutesAdmin = [
  {
    title: "Main Menu",
    layout: "/admin",
    views: [
      {
        name: "Main Dashboard",
        path: "dashboard",
        icon: <i className='fa-solid fa-grip'></i>,
        component: <MainDashboard />,
      },
      {
        name: "Project",
        path: "project",
        icon: <i className='fa-solid fa-list-check'></i>,
        component: <Project />,
      },
      {
        name: "Customers",
        path: "customers",
        icon: <i className='fa-solid fa-users'></i>,
        component: <Customers />,
      },
    ],
  },
  {
    title: "Product",
    layout: "/admin",
    views: [
      {
        name: "Add Product",
        path: "add-product",
        icon: <i className='fa-solid fa-plus'></i>,
        component: <AddProduct />,
      },
      {
        name: "List Product",
        path: "list-product",
        icon: <i className='fa-solid fa-list-check'></i>,
        component: <ListProduct />,
      },
    ],
  },
];
