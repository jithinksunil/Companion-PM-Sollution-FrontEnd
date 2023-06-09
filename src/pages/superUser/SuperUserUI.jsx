import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SuperUserDashBoardBody from "../../components/superUser/SuperUserDashBoardBody";
const Layout=React.lazy(()=>  import ("../../layout/Layout"));
import SuperUserConnectionsBody from "../../components/superUser/SuperUserConnectionsBody";
import MembershipCheckout from "../../components/superUser/MembershipCheckout";
import SuperUserProjectsBody from "../../components/superUser/SuperUserProjectsBody";
import Messenger from "../../components/common/Messenger";
import Notifications from "../../components/common/Notifications";
import ProfileBody from "../../components/common/Profile";
import { setSuperUser } from "../../store/slices/SuperUserSice";
import SuperUserSiteEngineersAssignmentBody from "../../components/superUser/SuperUserSiteEngineersAssignmentBody";


function SuperUserUI() {
  const superUser = useSelector((state) => state.superUser.value);
  return (
    
    <Layout
      individual={superUser}
      links={{
        profile: "/superuser/profile",
        logout: {link:"/login",token:'superUserToken'},
        notifications: "/superuser/notifications",
        connections: "/superuser/connections",
        siteEngineers: "/superuser/siteengineers",
        chat:'/superuser/chat',
        projects: "/superuser/projects",
        reports: "/superuser/reports",
        dashBoard: "/superuser/dashboard",
      }}
    >
      <Routes>
        <Route path="/dashboard" element={<SuperUserDashBoardBody />} />
        <Route path="/projects" element={<SuperUserProjectsBody />} />
        <Route path="/reports" element={<SuperUserProjectsBody />} />
        <Route path="/profile" element={<ProfileBody individual={superUser} setIndividual={setSuperUser} />} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/connections" element={<SuperUserConnectionsBody />} />
        <Route path="/siteengineers" element={<SuperUserSiteEngineersAssignmentBody />} />
        <Route path="/membershipupgrade" element={<MembershipCheckout/>} />
        <Route path="/chat" element={<Messenger individual={superUser}/>} />
      </Routes>
      
    </Layout>
    
  );
}

export default SuperUserUI;
