import React from "react";

export default function StatsRow({ services, issues, feedback }) {
  const serviceCount = services.length;
  const openIssues = issues.filter(
    (i) => i.status === "Open" || i.status === "Investigating"
  ).length;
  const avgRating =
    feedback.reduce((sum, f) => sum + f.rating, 0) / feedback.length;

  return (
    <div className="stats-row">
      <div className="stat-card">
        <div className="stat-label">Public services</div>
        <div className="stat-value">{serviceCount}</div>
        <div className="stat-sub">Essential services registered</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Open issues</div>
        <div className="stat-value">{openIssues}</div>
        <div className="stat-sub">Citizen-reported problems</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Amenity rating</div>
        <div className="stat-value">{avgRating.toFixed(1)} ★</div>
        <div className="stat-sub">Average citizen feedback</div>
      </div>
    </div>
  );
}
