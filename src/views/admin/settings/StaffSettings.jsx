export default function StaffSettings() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">👥 Staff Settings</h2>
      <ul className="space-y-4">
        <li className="flex justify-between items-center border p-3 rounded-md">
          <span className="font-medium">Anita (Hair Stylist)</span>
          <button className="text-sm text-blue-600 hover:underline">Edit</button>
        </li>
        <li className="flex justify-between items-center border p-3 rounded-md">
          <span className="font-medium">Rahul (Manager)</span>
          <button className="text-sm text-blue-600 hover:underline">Edit</button>
        </li>
        <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-md hover:bg-blue-600">
          ➕ Add Staff
        </button>
      </ul>
    </div>
  );
}
