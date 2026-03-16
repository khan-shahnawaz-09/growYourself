import React from "react";

const Brand = ({ size = 42 }) => {
  return (
    <a className="gs-brand">
      <div
        className="gs-brand-icon"
        style={{ width: size, height: size }}
      >
        <span style={{ color: "white", fontWeight: "bold" }}>GS</span>
      </div>

      <div className="gs-brand-text">
        <strong>CodeInYourself</strong>
      </div>
    </a>
  );
};

export default Brand;