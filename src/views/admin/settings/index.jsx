import React from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";

import SiteSettings from "./SiteSettings";
import PrivacySettings from "./PrivacySettings";
import PaymentSettings from "./PaymentSettings";
import NotificationSettings from "./NotificationSettings";
import AccountSettings from "./AccountSettings";
import StaffSettings from "./StaffSettings";

const settings = [
  { to: "site-settings", label: "Site" },
  { to: "privacy-settings", label: "Privacy" },
  { to: "payment-settings", label: "Payment" },
  { to: "notification-settings", label: "Notifications" },
  { to: "account-settings", label: "Account" },
  { to: "staff-settings", label: "Staff" }
]

export default function Settings() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">⚙️ Settings</h1>

      {/* 🔝 Tab Navigation
      <div className="flex flex-wrap gap-4 mb-6">
        <NavTab to="site-settings" label="Site" color="blue" />
        <NavTab to="privacy-settings" label="Privacy" color="green" />
        <NavTab to="payment-settings" label="Payment" color="purple" />
        <NavTab to="notification-settings" label="Notifications" color="yellow" />
        <NavTab to="account-settings" label="Account" color="indigo" />
        <NavTab to="staff-settings" label="Staff" color="pink" />
      </div> */}

      <div className="flex items-center bg-white p-2 pb-0 mb-2">
        {settings?.map((setting) => (
          <NavLink
            to={setting.to}
            className={({ isActive }) =>
              `px-10 py-3 font-medium transition border-b-2 bg-white text-md  ${isActive
                ? 'border-b-green-500 '
                : "border-b-transparent hover:border-b-green-200 "
              }`
            }
          >
            {setting.label}
          </NavLink>
        ))
        }
      </div >

      {/* 🧩 Route Outlet */}
      <Routes>
        <Route index element={<Navigate to="site-settings" replace />} />
        <Route path="site-settings" element={<SiteSettings />} />
        <Route path="privacy-settings" element={<PrivacySettings />} />
        <Route path="payment-settings" element={<PaymentSettings />} />
        <Route path="notification-settings" element={<NotificationSettings />} />
        <Route path="account-settings" element={<AccountSettings />} />
        <Route path="staff-settings" element={<StaffSettings />} />
      </Routes>


    </div>
  );
}

// // ✅ Reusable NavTab component
// function NavTab({ to, label, color }) {
//   return (
//     // <NavLink
//     //   to={to}
//     //   className={({ isActive }) =>
//     //     `px-6 py-2 text-sm font-medium transition border-b bg-white  ${isActive
//     //       ? 'border-b-green-500 '
//     //       : "border-b-transparent hover:border-b-green-400 "
//     //     }`
//     //   }
//     // >
//     //   {label}
//     // </NavLink>

//   );
// }
