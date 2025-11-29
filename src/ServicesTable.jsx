import React, { useState } from "react";

export default function ServicesTable({
  services,
  search,
  isAdmin,
  onAddService
}) {
  const filtered = services.filter((s) => {
    const text = (s.name + s.dept + s.area + s.category).toLowerCase();
    return text.includes(search.toLowerCase());
  });

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    dept: "",
    area: "",
    category: "Public Service",
    status: "active"
  });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.dept || !form.area) return;
    onAddService(form);
    setForm({
      name: "",
      dept: "",
      area: "",
      category: "Public Service",
      status: "active"
    });
    setShowForm(false);
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <div className="panel-title">Registered city services</div>
          <div className="panel-helper">
            {isAdmin
              ? "Admins can add or update services. Users can only view."
              : "View essential public services and infrastructure available in the city."}
          </div>
        </div>
        {isAdmin && (
          <button
            className="btn-primary"
            onClick={() => setShowForm((v) => !v)}
          >
            {showForm ? "Close form" : "+ Add service"}
          </button>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>Service / Project</th>
            <th>Department</th>
            <th>Zone</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="5">
                <div className="empty-state">No services match your search.</div>
              </td>
            </tr>
          ) : (
            filtered.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.dept}</td>
                <td>{s.area}</td>
                <td>{s.category}</td>
                <td>
                  <span
                    className={
                      "status-pill " +
                      (s.status === "active"
                        ? "status-active"
                        : s.status === "down"
                        ? "status-down"
                        : "status-planned")
                    }
                  >
                    {s.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isAdmin && showForm && (
        <form className="form" onSubmit={submit}>
          <div className="panel-helper" style={{ marginBottom: 8 }}>
            Quick add a new public service or infrastructure project.
          </div>

          <div className="form-row">
            <label>Service name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g., Smart Parking System"
              required
            />
          </div>
          <div className="form-row">
            <label>Department</label>
            <input
              value={form.dept}
              onChange={(e) => setForm({ ...form, dept: e.target.value })}
              placeholder="e.g., Transport"
              required
            />
          </div>
          <div className="form-row">
            <label>Zone / Area</label>
            <input
              value={form.area}
              onChange={(e) => setForm({ ...form, area: e.target.value })}
              placeholder="e.g., Tech Corridor"
              required
            />
          </div>
          <div className="form-row">
            <label>Category & Status</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option>Public Service</option>
              <option>Infrastructure</option>
              <option>Digital Service</option>
            </select>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="active">Active</option>
              <option value="planned">Planned</option>
              <option value="down">Down</option>
            </select>
          </div>
          <div className="form-footer">
            <button className="btn-primary" type="submit">
              Save service
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
