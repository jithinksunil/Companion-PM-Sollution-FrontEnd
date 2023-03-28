import React from "react";
import AdminDashBoardBody from "../../components/admin/AdminDashBoardBody";
import AdminProfileBody from "../../components/admin/AdminProfileBody";
import { Route, Routes } from "react-router-dom";
import Layout from "../../layout/Layout";
import AdminUserManagement from "../../components/admin/AdminUserManagement";

function AdminUI() {
  return (
    <Layout
      links={{
        profile: "/admin/profile",
        logout: {link:"/admin/login",token:'adminToken'},
        dashBoard: "/admin/dashboard",
        userManagement: "/admin/usermanagement",
      }}
    >
      <Routes>
        <Route path="/dashboard" element={<AdminDashBoardBody />} />
        <Route path="/usermanagement" element={<AdminUserManagement />} />
        <Route path="/profile" element={<AdminProfileBody />} />
      </Routes>
    </Layout>
  );
}

export default AdminUI;
