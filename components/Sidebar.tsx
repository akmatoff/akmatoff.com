import React from "react";
import Socials from "./Socials";

function Sidebar() {
  return (
    <div className="hidden md:flex flex-col justify-center h-screen fixed p-4 md:p-8 right-0">
      <Socials />
    </div>
  );
}

export default Sidebar;
