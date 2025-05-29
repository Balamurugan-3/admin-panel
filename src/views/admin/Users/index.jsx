import React from "react";
const users = [
  {
    id: 1,
    name: "Anjali Raj",
    email: "anjali@example.com",
    phone: "9876543210",
    role: "Customer",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 2,
    name: "Vikram S",
    email: "vikram@example.com",
    phone: "9123456789",
    role: "Stylist",
    status: "Inactive",
    avatar: "https://i.pravatar.cc/150?img=4",
  },

   {
    id: 3,
    name: "Anjali Raj",
    email: "anjali@example.com",
    phone: "9876543210",
    role: "Customer",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Vikram S",
    email: "vikram@example.com",
    phone: "9123456789",
    role: "Stylist",
    status: "Inactive",
    avatar: "https://i.pravatar.cc/150?img=4",
  },

   {
    id: 5,
    name: "Anjali Raj",
    email: "anjali@example.com",
    phone: "9876543210",
    role: "Customer",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 6,
    name: "Vikram S",
    email: "vikram@example.com",
    phone: "9123456789",
    role: "Stylist",
    status: "Inactive",
    avatar: "https://i.pravatar.cc/150?img=4",
  }, {
    id: 7,
    name: "Anjali Raj",
    email: "anjali@example.com",
    phone: "9876543210",
    role: "Customer",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 8,
    name: "Vikram S",
    email: "vikram@example.com",
    phone: "9123456789",
    role: "Stylist",
    status: "Inactive",
    avatar: "https://i.pravatar.cc/150?img=4",
  },

];

export default function Users() {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg mt-8">
      <table className="min-w-full">
        <thead className="">
          <tr className="">
            <th className="p-2 py-3 text-center bg-green-200 text-sm font-medium ">
              User
            </th>
            <th className="p-2 py-3 text-center bg-green-200 text-sm font-medium ">
              Email
            </th>
            <th className="p-2 py-3 text-center bg-green-200 text-sm font-medium ">
              Phone
            </th>
            <th className="p-2 py-3 text-center bg-green-200 text-sm font-medium ">
              Role
            </th>
            <th className="p-2 py-3 text-center bg-green-200 text-sm font-medium ">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100 text-sm">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 text-center ">
              <td className="px-6 py-4 flex items-center flex-wrap gap-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="size-10 rounded-full"
                />
                <span className="font-medium">{user.name}</span>
              </td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.phone}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${user.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                    }`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


