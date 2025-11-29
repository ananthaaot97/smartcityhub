// src/pages/DashboardLayout.jsx
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import StatsRow from "../components/StatsRow.jsx";
import { useAppContext } from "../App.jsx";

export default function DashboardLayout() {
  const {
    services,
    issues,
    feedback,
    searchTerm,
    setSearchTerm,
    isSignedIn,
    userName,
    userRole,
    signOut
  } = useAppContext();

  const navigate = useNavigate(); // <-- to move between pages

  const roleLabel =
    userRole === "admin"
      ? "Mode: Admin – manage city info, services & infrastructure."
      : "Mode: User – explore city, report issues & give feedback.";

  return (
    <>
      <Navbar
        search={searchTerm}
        onSearchChange={setSearchTerm}
        isSignedIn={isSignedIn}
        userRole={userRole}
        userName={userName}
        onSignOut={signOut}
      />

      <main className="main">
        <Sidebar mode={userRole} />

        <section className="content">
          <div className="content-header">
            <div className="content-title-block">
              <div className="city-title">
                NeoVille Smart City
                <span className="badge">
                  FEDF-PS21 • Smart City Application
                </span>
              </div>
              <div>
                <span className="role-badge">
                  <span
                    className={
                      "role-dot " +
                      (userRole === "admin"
                        ? "role-admin-dot"
                        : "role-user-dot")
                    }
                  ></span>
                  {roleLabel}
                </span>
              </div>
            </div>

            <div className="header-actions">
              {/* go to /dashboard/export -> snapshot/export page */}
              <button
                className="btn-ghost"
                onClick={() => navigate("/dashboard/export")}
              >
                Export snapshot
              </button>

              {/* go to /dashboard/reports -> reports page */}
              <button
                className="btn-primary"
                onClick={() => navigate("/dashboard/reports")}
              >
                Generate report
              </button>
            </div>
          </div>

          <StatsRow services={services} issues={issues} feedback={feedback} />

          {/* child pages (Services, Issues, Feedback, Reports, Export...) */}
          <Outlet />
        </section>
      </main>
    </>
  );
}
