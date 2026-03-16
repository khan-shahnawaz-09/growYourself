import React from "react";
import Brand from "./Brand";
const Navbar = () => {
  return (
    <>
      <nav className="gs-nav">
        <div className="gs-nav-l">
          <Brand />
          <div className="gs-navlinks">
            <a>Upskill your Team</a>
            <a>About</a>
          </div>
        </div>
        <div className="gs-nav-r">
          <button className="gs-btn-outline">Login</button>
          <button className="gs-btn-outline">Apply as Mentor</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
