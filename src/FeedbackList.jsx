import React, { useState } from "react";

export default function FeedbackList({
  feedback,
  search,
  canGiveFeedback,
  onAddFeedback
}) {
  const filtered = feedback.filter((f) => {
    const text = (f.title + f.amenity + f.user).toLowerCase();
    return text.includes(search.toLowerCase());
  });

  const [form, setForm] = useState({
    amenity: "",
    title: "",
    rating: "4"
  });

  const submit = (e) => {
    e.preventDefault();
    if (!form.amenity || !form.title) return;
    onAddFeedback(form);
    setForm({ amenity: "", title: "", rating: "4" });
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <div className="panel-title">Citizen feedback on amenities</div>
          <div className="panel-helper">
            {canGiveFeedback
              ? "Share your experience with city services and amenities."
              : "Track satisfaction level of major amenities."}
          </div>
        </div>
      </div>

      <div className="list">
        {filtered.length === 0 ? (
          <div className="empty-state">
            No feedback found for the current filters.
          </div>
        ) : (
          filtered.map((f) => (
            <div className="list-item" key={f.id}>
              <div className="list-item-header">
                <div className="list-item-title">{f.title}</div>
                <div className="rating">
                  {"★".repeat(f.rating) + "☆".repeat(5 - f.rating)}
                </div>
              </div>
              <div className="list-item-meta">
                <span>{f.amenity}</span>
                <span>{f.user}</span>
                <span>{f.timeAgo}</span>
              </div>
            </div>
          ))
        )}
      </div>

      {canGiveFeedback && (
        <form className="form" onSubmit={submit}>
          <div className="panel-helper" style={{ marginBottom: 8 }}>
            Provide feedback on any city amenity.
          </div>
          <div className="form-row">
            <label>Amenity</label>
            <input
              value={form.amenity}
              onChange={(e) =>
                setForm({ ...form, amenity: e.target.value })
              }
              placeholder="e.g., Smart Bus Stop"
              required
            />
          </div>
          <div className="form-row">
            <label>Your feedback</label>
            <textarea
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              placeholder="e.g., Display is clear but needs more shade."
              required
            />
          </div>
          <div className="form-row">
            <label>Rating</label>
            <select
              value={form.rating}
              onChange={(e) =>
                setForm({ ...form, rating: e.target.value })
              }
            >
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Good</option>
              <option value="3">3 - Average</option>
              <option value="2">2 - Poor</option>
              <option value="1">1 - Very bad</option>
            </select>
          </div>
          <div className="form-footer">
            <button className="btn-primary" type="submit">
              Submit feedback
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
