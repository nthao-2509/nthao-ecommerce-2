import MainDashboard from "views/admin/MainDashboard";
import SignIn from "views/auth/SignIn";
import ClientView from "views/clients";
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
    ],
  },
];
