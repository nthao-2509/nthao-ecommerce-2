import NavbarClient from "components/clients/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const ClientView = () => {
  return (
    <>
      <NavbarClient />
      <Outlet />
    </>
  );
};

export default ClientView;
