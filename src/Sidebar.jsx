import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ mode }) {
  return (
    <aside className="sidebar">
      <div className="side-block">
        <div className="side-section-title">Mode</div>
        <div className="side-nav">
          <button className={mode === "admin" ? "active" : ""}>
            Admin
            <span className="pill role-pill-admin">manage city</span>
          </button>
          <button className={mode === "user" ? "active" : ""}>
            User
            <span className="pill role-pill-user">citizen portal</span>
          </button>
        </div>
      </div>

      <div className="side-block">
        <div className="side-section-title">Sections</div>
        <div className="side-chip-group">
          <NavLink
            to="/dashboard/services"
            className={({ isActive }) =>
              "side-chip" + (isActive ? " active" : "")
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/dashboard/issues"
            className={({ isActive }) =>
              "side-chip" + (isActive ? " active" : "")
            }
          >
            Issues
          </NavLink>
          <NavLink
            to="/dashboard/feedback"
            className={({ isActive }) =>
              "side-chip" + (isActive ? " active" : "")
            }
          >
            Feedback
          </NavLink>
        </div>
      </div>

      <div className="side-block">
        <div className="side-section-title">Quick Stats</div>
        <div style={{ fontSize: "12px", color: "#8b949e", lineHeight: 1.5 }}>
          • Population: <span style={{ color: "#c9d1d9" }}>3.2M</span>
          <br />
          • Zones: <span style={{ color: "#c9d1d9" }}>5</span>
          <br />
          • Smart sensors: <span style={{ color: "#c9d1d9" }}>2,430</span>
        </div>
      </div>
    </aside>
  );
}
