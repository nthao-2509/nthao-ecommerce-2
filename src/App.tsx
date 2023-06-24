import { message } from "antd";
import AdminLayout from "layouts/admin";

import AuthLayout from "layouts/auth";
import RtlLayout from "layouts/rtl";
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { AppDispatch } from "store";
function App() {
  message.config({
    top: 100,
    duration: 2,
    maxCount: 1,
    rtl: true,
    prefixCls: "my-message",
  });
  return (
    <Routes>
      <Route path='auth/*' element={<AuthLayout />} />
      <Route path='admin/*' element={<AdminLayout />} />
      <Route path='rtl/*' element={<RtlLayout />} />
      <Route path='/' element={<Navigate to={"/admin"} replace />} />
    </Routes>
  );
}

export default App;
