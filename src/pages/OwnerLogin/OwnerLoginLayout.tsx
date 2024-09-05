import React from "react";
import { Outlet } from "react-router-dom";

const OwnerLoginLayout: React.FC = () => {
  return (
    <div className="owner-login-layout">
      <Outlet />
    </div>
  );
};

export default OwnerLoginLayout;
