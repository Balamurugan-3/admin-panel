import React from "react";

export default function SiteSettings() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">🌐 Site Settings</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Salon Name</label>
          <input
            type="text"
            placeholder="Glamour Beauty Lounge"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Website URL</label>
          <input
            type="url"
            placeholder="https://your-salon.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Salon Description</label>
          <textarea
            rows={3}
            placeholder="Describe your salon..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
          ></textarea>
        </div>

        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
          Save Changes
        </button>
      </form>
    </div>
  );
}
