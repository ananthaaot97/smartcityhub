import React from "react";
import { useAppContext } from "../App.jsx";
import IssuesList from "../components/IssuesList.jsx";

export default function IssuesPage() {
  const { issues, searchTerm, addIssue, userRole } = useAppContext();
  const canReport = userRole === "user";

  return (
    <>
      <div className="tabs">
        <div className="tab">Services</div>
        <div className="tab active">Issues</div>
        <div className="tab">Feedback</div>
      </div>

      <IssuesList
        issues={issues}
        search={searchTerm}
        canReport={canReport}
        onAddIssue={addIssue}
      />
    </>
  );
}
