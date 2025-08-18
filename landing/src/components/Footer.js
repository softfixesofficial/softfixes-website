// Modern footer component with glassmorphism effects and dark purple theme.
import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© <span className="footer-year">{new Date().getFullYear()}</span> SoftFixes.</span>
        <span>All rights reserved.</span>
        <span>Fix it fast / own the future</span>
      </div>
    </footer>
  );
}

export default Footer; 