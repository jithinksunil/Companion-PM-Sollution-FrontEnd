import React from "react";
import AdminDashBoardBody from "../pages/admin/AdminDashBoardBody";
import AdminProfileBody from "../pages/admin/AdminProfileBody";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import AdminUserManagementBody from "../pages/admin/AdminUserManagementBody";


function AdminRoutes() {
  return (
    <Layout
      links={{
        profile: "/admin/profile",
        logout: { link: "/admin/login", token: 'adminToken' },
        dashBoard: "/admin/dashboard",
        userManagement: "/admin/usermanagement",
      }}
    >
      <Routes>
        <Route path="/dashboard" element={<AdminDashBoardBody />} />
        <Route path="/usermanagement" element={<AdminUserManagementBody />} />
        <Route path="/profile" element={<AdminProfileBody />} />
      </Routes>
    </Layout>
  );
}

export default AdminRoutes;
