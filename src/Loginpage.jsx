import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../App.jsx";

export default function LoginPage() {
  const { signIn } = useAppContext();
  const navigate = useNavigate();

  const [name, setName] = useState("Anantha");
  const [role, setRole] = useState("admin");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    signIn(name.trim(), role);
    navigate("/dashboard/services");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d1117",
        color: "#c9d1d9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          border: "1px solid #30363d",
          borderRadius: "8px",
          backgroundColor: "#161b22",
          padding: "24px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "16px"
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              backgroundColor: "#f78166",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#0d1117",
              fontSize: "22px"
            }}
          >
            SC
          </div>
        </div>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "8px",
            fontSize: "20px"
          }}
        >
          Sign in to SmartCityHub
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#8b949e",
            marginBottom: "16px"
          }}
        >
          Mini smart city platform for FEDF-PS21
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Anantha"
            />
          </div>

          <div className="form-row">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin – manage city</option>
              <option value="user">User – citizen portal</option>
            </select>
          </div>

          <div className="form-footer">
            <button type="submit" className="btn-primary" style={{ width: "100%" }}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
