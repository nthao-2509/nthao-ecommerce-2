import React from "react";
import { StyleAdmin } from "./style";
import Sidebar from "components/sidebar";
import { TypeRoutes, ViewRoutes } from "types/Types";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "components/navbar";
import { RoutesAdmin } from "routes";

const AdminLayout = () => {
  const [open, setOpen] = React.useState(true);

  const getRoutes = (routes: TypeRoutes[]) => {
    return routes.map((props: TypeRoutes, key: number) => {
      if (props.layout === "/admin") {
        return (
          <>
            {props.views.map((view: ViewRoutes, key: number) => (
              <Route
                path={`/${view.path}`}
                element={view.component}
                key={key}
              />
            ))}
          </>
        );
      } else {
        return null;
      }
    });
  };
  return (
    <StyleAdmin>
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <main>
        <Navbar />
        <div className='content'>
          <Routes>
            {getRoutes(RoutesAdmin)}
            <Route
              path='/'
              element={<Navigate to='/admin/dashboard' replace />}
            />
          </Routes>
        </div>
      </main>
    </StyleAdmin>
  );
};

export default AdminLayout;
