import React from "react";

export default function PaymentSettings() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">💳 Payment Settings</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Account Holder Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">UPI / Bank Account</label>
          <input
            type="text"
            placeholder="john@upi / 1234567890"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Preferred Payment Method</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none">
            <option value="">Select</option>
            <option>UPI</option>
            <option>Bank Transfer</option>
            <option>Cash on Delivery</option>
          </select>
        </div>

        <button className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition">
          Save Payment Info
        </button>
      </form>
    </div>
  );
}
