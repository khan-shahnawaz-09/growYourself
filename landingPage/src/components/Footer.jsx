import React from "react";
import Brand from "./Brand";

const Footer = () => {
  return (
    <div>
      <footer className="gs-footer">
        <div className="gs-fgrid">
          <div className="gs-fbrand">
            <Brand size={36} />
            <p>
              India's leading live learning platform. Learn from top 1% mentors
              and future-proof your career.
            </p>
          </div>
          <div className="gs-fcol">
            <h5>Programs</h5>
            {[
              "AI & ChatGPT",
              "Growth Hacking",
              "Product Management",
              "UI/UX Design",
              "Marketing",
            ].map((l) => (
              <a key={l}>{l}</a>
            ))}
          </div>
          <div className="gs-fcol">
            <h5>Company</h5>
            {["About", "Careers", "Blog", "Upskill Team"].map((l) => (
              <a key={l}>{l}</a>
            ))}
          </div>
          <div className="gs-fcol">
            <h5>Support</h5>
            {[
              "Help Center",
              "Refund Policy",
              "Privacy Policy",
              "Terms",
              "hi@codeinyourself.io",
            ].map((l) => (
              <a key={l}>{l}</a>
            ))}
          </div>
        </div>
        <div className="gs-fbot">
          <p>
            © 2025 CodeInYourself. All rights reserved. Made with ❤️ in India.
          </p>
          <p>LinkedIn · Twitter · Instagram · YouTube</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
