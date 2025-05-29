export default function AccountSettings() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">👤 Account Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            placeholder="salonowner123"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="owner@salon.com"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Change Password</label>
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-400"
          />
        </div>
        <button className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600">
          Save Account Info
        </button>
      </form>
    </div>
  );
}
