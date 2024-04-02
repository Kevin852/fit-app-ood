import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Signin from "./pages/Signin";
import SigninLayout from "./layouts/SigninLayout";
import Singup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import BasicLayout from "./layouts/BasicLayout";


function RouteWrapper({ layout: Layout, page: Page }) {
  return (
    <Layout>
      <Page />
    </Layout>
  );
}



function router() {
    return (
    <Router>
        <Routes>
        <Route
               path="/sign-in"
              element={<RouteWrapper layout={SigninLayout} page={Signin} />}
            />
            <Route
              path="/sign-up"
              element={<RouteWrapper layout={SigninLayout} page={Singup} />}
            />
             <Route
              path="/dashboard"
              element={<RouteWrapper layout={BasicLayout} page={Dashboard} />}
            />
        </Routes>
    </Router>
    );
}

export default router;
