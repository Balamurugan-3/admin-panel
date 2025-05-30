import DatePicker from "react-datepicker";
import { setHours, setMinutes, isSameDay } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

export default function AppointmentForm() {
  const [services, setServices] = useState([
    "Haircut",
    "Hair Coloring",
    "Facial",
    "Manicure",
    "Pedicure",
  ]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const [nameList, setNameList] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([
    new Date("2025-05-29T09:00:00.000Z"),
    new Date("2025-05-29T10:30:00.000Z"),
    new Date("2025-05-30T12:00:00.000Z"),
  ]);

  useEffect(() => {
    setTimeout(() => {
      setNameList(["Ram Kumar", "Priya", "Arun", "Sita Devi"]);
    }, 500);
  }, []);

  const getExcludedTimes = (date) => {
    return bookedSlots.filter((slot) => isSameDay(slot, date));
  };

  return (
    
      <div className=" bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-yellow-100">
        <h2 className="text-4xl font-bold text-center text-[#005558] mb-8 drop-shadow-sm">
          💇‍♀️ Book Your Salon Appointment
        </h2>

        <form className="space-y-8">
          {/* Name Selection */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              👤 Select Name
            </label>
            <select
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none  bg-white shadow-inner"
            >
              <option value="">-- Choose your name --</option>
              {nameList.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {/* Services */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              💅 Select Services
            </label>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-gray-400"
                >
                  <input
                    type="checkbox"
                    value={service}
                    className="accent-yellow-500 h-5 w-5"
                  />
                  <span className="text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              📅 Select Appointment
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              dateFormat="Pp"
              minDate={new Date()}
              minTime={setHours(setMinutes(new Date(), 0), 9)}
              maxTime={setHours(setMinutes(new Date(), 0), 21)}
              excludeTimes={getExcludedTimes(selectedDate || new Date())}
              placeholderText="Choose Date & Time"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-inner focus:outline-none "
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              📝 Additional Notes
            </label>
            <textarea
              rows="3"
              placeholder="Any special requests?"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-inner resize-none focus:outline-none "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#005558] hover:bg-yellow-600 text-white text-lg font-bold py-3 rounded-lg transition-all shadow-md"
          >
            ✅ Book Appointment
          </button>
        </form>
      </div>
  );
}
