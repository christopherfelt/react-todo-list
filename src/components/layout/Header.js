import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div>
      <h1 style={headerStyle}>Todo Lists</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </div>
  );
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "black",
  textDecoration: "none",
};
