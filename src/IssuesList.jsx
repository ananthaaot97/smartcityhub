import React, { useState } from "react";

export default function IssuesList({
  issues,
  search,
  canReport,
  onAddIssue
}) {
  const filtered = issues.filter((i) => {
    const text = (i.title + i.area + i.status + i.priority).toLowerCase();
    return text.includes(search.toLowerCase());
  });

  const [form, setForm] = useState({
    title: "",
    area: "",
    priority: "Medium",
    desc: ""
  });

  const submit = (e) => {
    e.preventDefault();
    if (!form.title || !form.area) return;
    onAddIssue(form);
    setForm({ title: "", area: "", priority: "Medium", desc: "" });
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <div className="panel-title">Service issues reported by citizens</div>
          <div className="panel-helper">
            {canReport
              ? "Report problems with water, power, transport or other amenities."
              : "Monitor and act on open issues reported from different zones."}
          </div>
        </div>
      </div>

      <div className="list">
        {filtered.length === 0 ? (
          <div className="empty-state">
            No issues found for the current filters.
          </div>
        ) : (
          filtered.map((i) => (
            <div className="list-item" key={i.id}>
              <div className="list-item-header">
                <div className="list-item-title">{i.title}</div>
                <div className="list-item-meta">
                  <span>{i.area}</span>
                  <span>{i.status}</span>
                  <span>{i.priority} priority</span>
                  <span>{i.timeAgo}</span>
                </div>
              </div>
              <div style={{ fontSize: "12px", color: "#8b949e" }}>
                Reported via: {i.createdBy}
              </div>
            </div>
          ))
        )}
      </div>

      {canReport && (
        <form className="form" onSubmit={submit}>
          <div className="panel-helper" style={{ marginBottom: 8 }}>
            Report a new issue with any public service.
          </div>
          <div className="form-row">
            <label>Issue title</label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g., No water supply in Sector 5"
              required
            />
          </div>
          <div className="form-row">
            <label>Zone / Area</label>
            <input
              value={form.area}
              onChange={(e) => setForm({ ...form, area: e.target.value })}
              placeholder="e.g., South Zone"
              required
            />
          </div>
          <div className="form-row">
            <label>Priority</label>
            <select
              value={form.priority}
              onChange={(e) => setForm({ ...form, priority: e.target.value })}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div className="form-row">
            <label>Details</label>
            <textarea
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              placeholder="Optional additional details…"
            />
          </div>
          <div className="form-footer">
            <button className="btn-primary" type="submit">
              Submit issue
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
