import React from "react";
import { Link } from "react-router-dom";

const NavigationLink = ({ to, bg, text, textcolor, onClick }) => {
  const styles = {
    background: bg,
    color: textcolor,
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
    marginLeft: "8px",
    cursor: "pointer",
    display: "inline-block",
  };

  if (to) {
  
    return (
      <Link to={to} className="navlink" style={styles}>
        {text}
      </Link>
    );
  }

  
  return (
    <span onClick={onClick} style={styles} className="navlink">
      {text}
    </span>
  );
};

export default NavigationLink;
