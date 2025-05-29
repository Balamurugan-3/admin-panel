import React from 'react'
import { Link } from 'react-router-dom';

const appointments = [
    {
        id: 1,
        name: "Anjali Raj",
        service: "Haircut",
        date: "2025-06-01",
        time: "10:00 AM",
        status: "Accepted",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: 2,
        name: "Vikram S",
        service: "Hair Coloring",
        date: "2025-06-01",
        time: "11:00 AM",
        status: "Rejected",
        avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
        id: 3,
        name: "Sara K",
        service: "Manicure",
        date: "2025-06-02",
        time: "02:00 PM",
        status: "Pending",
        avatar: "https://i.pravatar.cc/150?img=5",
    },
];

export default function AppointmentList() {
    return (
        <>
            <div className='my-2'>
                <h1 className="text-3xl font-bold text-[#005558] text-center">Salon Appointment</h1>
                <p className='text-end'>
                    <Link to="/admin/appointment/appointment-form" className="px-8 py-2 bg-green-400 text-white font-medium rounded mr-16">Book</Link>
                </p>
            </div>
            <div className="overflow-x-auto bg-white shadow-md rounded-lg mt-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold p-4 border-b">💇‍♀️ Appointment List</h2>
                <table className="min-w-full text-center">
                    <thead>
                        <tr className="bg-green-50">
                            <th className="p-3">Customer</th>
                            <th className="p-3">Service</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Time</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {appointments.map((apt) => (
                            <tr key={apt.id} className="hover:bg-green-50">
                                <td className="px-4 py-3 flex items-center gap-3 justify-center">
                                    <img
                                        src={apt.avatar}
                                        alt={apt.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <span className="font-medium">{apt.name}</span>
                                </td>
                                <td className="px-4 py-3">{apt.service}</td>
                                <td className="px-4 py-3">{apt.date}</td>
                                <td className="px-4 py-3">{apt.time}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${apt.status === "Accepted"
                                            ? "bg-green-100 text-green-700"
                                            : apt.status === "Rejected"
                                                ? "bg-red-100 text-red-700"
                                                : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {apt.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>


    );
}
