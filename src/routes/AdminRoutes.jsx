import React, { useCallback } from "react";
import AdminDashBoardBody from "../pages/admin/AdminDashBoardBody";
import AdminProfileBody from "../pages/admin/AdminProfileBody";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import AdminUserManagementBody from "../pages/admin/AdminUserManagementBody";


function AdminRoutes() {
  const sideBarLinks=useCallback({
    dashBoard: "/admin/dashboard",
    userManagement: "/admin/usermanagement",
  },[])
  const navBarLinks=useCallback({
    profile: "/admin/profile",
    logout: { link: "/admin/login", token: 'adminToken' },
  },[])
  
  return (
    <Layout
      sideBarLinks={sideBarLinks}
      navBarLinks={navBarLinks}
    >
      <Routes>
        <Route path="/dashboard" element={<AdminDashBoardBody />} />
        <Route path="/usermanagement" element={<AdminUserManagementBody />} />
        <Route path="/profile" element={<AdminProfileBody />} />
      </Routes>
    </Layout>
  );
}

export default React.memo(AdminRoutes);
