export default function NotificationSettings() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">🔔 Notification Settings</h2>
      <form className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Booking Notifications</label>
          <input type="checkbox" className="h-5 w-5" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Promotional Emails</label>
          <input type="checkbox" className="h-5 w-5" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">SMS Alerts</label>
          <input type="checkbox" className="h-5 w-5" />
        </div>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600">
          Save Notifications
        </button>
      </form>
    </div>
  );
}
