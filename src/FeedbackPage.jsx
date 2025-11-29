import React from "react";
import { useAppContext } from "../App.jsx";
import FeedbackList from "../components/FeedbackList.jsx";

export default function FeedbackPage() {
  const { feedback, searchTerm, addFeedback, userRole } = useAppContext();
  const canGiveFeedback = userRole === "user";

  return (
    <>
      <div className="tabs">
        <div className="tab">Services</div>
        <div className="tab">Issues</div>
        <div className="tab active">Feedback</div>
      </div>

      <FeedbackList
        feedback={feedback}
        search={searchTerm}
        canGiveFeedback={canGiveFeedback}
        onAddFeedback={addFeedback}
      />
    </>
  );
}
