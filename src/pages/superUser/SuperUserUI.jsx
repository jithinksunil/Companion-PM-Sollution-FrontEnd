import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SuperUserDashBoardBody from "../../components/superUser/SuperUserDashBoardBody";
import SuperUserProfileBody from "../../components/superUser/SuperUserProfileBody";
const Layout=React.lazy(()=>  import ("../../layout/Layout"));
import SuperUserConnectionsBody from "../../components/superUser/SuperUserConnectionsBody";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "../../errorBoundaries/ErrorBoundary";
import MembershipCheckout from "../../components/superUser/MembershipCheckout";
import SuperUserProjectsBody from "../../components/superUser/SuperUserProjectsBody";
import Messenger from "../../components/common/Messenger";


function SuperUserUI() {
  const superUser = useSelector((state) => state.superUser.value);
  return (
    <ErrorBoundary FallbackComponent={ Fallback } onReset={ () => {} }>
    <Suspense fallback={<div>Loading...</div>} >
    <Layout
      individual={superUser}
      links={{
        profile: "/superuser/profile",
        logout: {link:"/login",token:'superUserToken'},
        message: "/",
        attendence: "/",
        notification: "/",
        connections: "/superuser/connections",
        videoCall:`/superuser/videocall/${superUser._id}`,
        chat:'/superuser/chat',
        projects: "/superuser/projects",
        dashBoard: "/superuser/dashboard",
      }}
    >
      <Routes>
        <Route path="/dashboard" element={<SuperUserDashBoardBody />} />
        <Route path="/projects" element={<SuperUserProjectsBody />} />
        <Route path="/profile" element={<SuperUserProfileBody />} />
        <Route path="/connections" element={<SuperUserConnectionsBody />} />
        <Route path="/membershipupgrade" element={<MembershipCheckout/>} />
        <Route path="/chat" element={<Messenger/>} />
      </Routes>
    </Layout>
    </Suspense>
    </ErrorBoundary>
  );
}

export default SuperUserUI;
