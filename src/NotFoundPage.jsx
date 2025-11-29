import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d1117",
        color: "#c9d1d9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "8px"
      }}
    >
      <h1 style={{ fontSize: "32px" }}>404</h1>
      <p style={{ color: "#8b949e" }}>Page not found.</p>
      <Link to="/" className="btn-primary" style={{ textDecoration: "none" }}>
        Go to login
      </Link>
    </div>
  );
}
