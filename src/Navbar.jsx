import React from "react";

export default function Navbar({
  search,
  onSearchChange,
  isSignedIn,
  userRole,
  userName,
  onSignOut
}) {
  const initial = userName ? userName.charAt(0).toUpperCase() : "?";

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <div className="logo-icon">SC</div>
        <span>SmartCityHub</span>
      </div>

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search services, areas, issues…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <nav className="nav-links">
        <a href="#">Dashboard</a>
        <a href="#">Services</a>
        <a href="#">Reports</a>
      </nav>

      <div className="nav-auth">
        {isSignedIn ? (
          <>
            <span style={{ fontSize: "12px", color: "#8b949e" }}>
              Signed in as <strong>{userName}</strong> ({userRole})
            </span>
            <div className="nav-avatar">{initial}</div>
            <button className="btn-ghost" onClick={onSignOut}>
              Sign out
            </button>
          </>
        ) : null}
      </div>
    </header>
  );
}
