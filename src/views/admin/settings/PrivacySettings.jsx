import React from "react";

export default function PrivacySettings() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">🔐 Privacy Settings</h2>

      <form className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Make Profile Public</label>
          <input type="checkbox" className="toggle-checkbox h-5 w-5" />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Allow Booking without Login</label>
          <input type="checkbox" className="toggle-checkbox h-5 w-5" />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Data Collection Consent</label>
          <input type="checkbox" className="toggle-checkbox h-5 w-5" />
        </div>

        <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition">
          Update Privacy
        </button>
      </form>
    </div>
  );
}
