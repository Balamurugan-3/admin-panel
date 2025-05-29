import React from "react";
import AppointmentList from "./AppointmentList";
import { Navigate, Route, Routes } from "react-router-dom";
import AppointmentForm from "./AppointmentForm";

export default function Appointment() {
  return (
    <div className="mt-4">
      <Routes>
        {/* <Route index element={<Navigate to="list" replace />} /> */}
        {/* <Route path="/appointment/*" element={<Appointment />} /> */}
        <Route index element={<Navigate to="appointment-list" replace />} />
        <Route path="appointment-form" element={<AppointmentForm />} />
        <Route path="appointment-list" element={<AppointmentList />} />
      </Routes>

    </div>
  );
}
