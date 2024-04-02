import React from "react";
import Logo from "../components/Logo";
import NavigationBar from "../components/NavigationBar";

function BasicLayout({ children }) {
  return (
    <div >
        <NavigationBar/>
        <div>
        {children}
      </div>
    </div>
  );
}

export default BasicLayout;