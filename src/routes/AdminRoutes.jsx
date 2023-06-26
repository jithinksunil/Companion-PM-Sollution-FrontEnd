import React, { useCallback } from "react";
import AdminDashBoardBody from "../pages/admin/AdminDashBoardBody";
const AdminProfileBody=React.lazy(()=>import ("../pages/admin/AdminProfileBody"))
import { Route, Routes } from "react-router-dom";
const Layout = React.lazy(() => import("../layout/Layout"));
import AdminUserManagementBody from "../pages/admin/AdminUserManagementBody";
import PageNotFound from "../components/errorPages/PageNotFound";


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
        <Route path=" *" element={<PageNotFound/>} />
      </Routes>
    </Layout>
  );
}

export default React.memo(AdminRoutes);
