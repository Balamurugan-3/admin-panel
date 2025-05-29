import { useServiceProvider } from "context/ServiceProviderContext";
import React, { useEffect } from "react";

const ServiceProvidersTable = () => {
  const { setFetchServiceProviders, handleEdit} = useServiceProvider();
const fetchServiceProviders = [{
  name: "Anjali Sharma",
  shopName: "Glow Beauty Studio",
  phoneNumber: "9876543210",
  email: "anjali.glow@gmail.com",
  address: "45 MG Road",
  landmark: "Near City Mall",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400001",
  services: ["Haircut", "Facial", "Manicure"],
  availableAtHome: "Yes"
},{
  name: "Rahul Verma",
  shopName: "Style Gents Salon",
  phoneNumber: "9123456780",
  email: "rahul.style@gmail.com",
  address: "123 Sector 21",
  landmark: "Opposite Metro Station",
  city: "Delhi",
  state: "Delhi",
  pincode: "110075",
  services: ["Haircut", "Shaving", "Hair Coloring"],
  availableAtHome: "No"
},{
  name: "Priya Nair",
  shopName: "Elegance Spa & Salon",
  phoneNumber: "9988776655",
  email: "priya.elegance@gmail.com",
  address: "78 Residency Road",
  landmark: "Next to Cafe Coffee Day",
  city: "Bangalore",
  state: "Karnataka",
  pincode: "560025",
  services: ["Spa", "Pedicure", "Bridal Makeup"],
  availableAtHome:"Yes"
}

]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/service-providers");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const result = await response.json();
        setFetchServiceProviders(result.data);
      } catch (error) {
        console.error("Error fetching service providers:", error);
      }
    };

    fetchData();
  }, [setFetchServiceProviders]);

  const formatField = (field) => {
    if (!field) return "";
    return Array.isArray(field)
      ? field.join(", ")
      : field
          .split(",")
          .map((f) => f.trim())
          .join(", ");
  };

  return (
    <section className="mt-4 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-gray-100 ">
          <tr>
            {[
              "Name",
              "Shop Name",
              "Phone Number",
              "Email",
              "Address",
              "Landmark",
              "City",
              "State",
              "Pin Code",
              "Services",
              "Available @Home?",
              "Actions"
            ].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600 text-center"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white text-center">
          {fetchServiceProviders && (
            fetchServiceProviders.map((item, index) => (
              <tr key={item.id || index}>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  {item.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  {item.shopName}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  {item.phoneNumber}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  {item.email}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  {item.address}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  {item.landmark}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  {item.city}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  {item.state}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  {item.pincode}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  {formatField(item.services)}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  {item.availableAtHome}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  <div className="flex gap-2">
                    <button className="rounded-lg bg-yellow-500 px-4 py-1.5 font-semibold text-white shadow-md transition duration-200 hover:bg-yellow-600" onClick={() => handleEdit(item.id)}>
                      Edit
                    </button>
                    <button className="rounded-lg bg-red-500 px-4 py-1.5 font-semibold text-white shadow-md transition duration-200 hover:bg-red-600" onClick={() => handleEdit(item.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default ServiceProvidersTable;
