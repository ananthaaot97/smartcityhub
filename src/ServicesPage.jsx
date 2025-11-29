import React from "react";
import { useAppContext } from "../App.jsx";
import ServicesTable from "../components/ServicesTable.jsx";

export default function ServicesPage() {
  const {
    services,
    searchTerm,
    addService,
    userRole
  } = useAppContext();

  const isAdmin = userRole === "admin";

  return (
    <>
      <div className="tabs">
        <div className="tab active">Services</div>
        <div className="tab">Issues</div>
        <div className="tab">Feedback</div>
      </div>

      <ServicesTable
        services={services}
        search={searchTerm}
        isAdmin={isAdmin}
        onAddService={addService}
      />
    </>
  );
}
