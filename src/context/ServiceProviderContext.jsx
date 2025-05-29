import { createContext, useContext, useState } from "react";

// Create the context
const ServiceProviderContext = createContext();

// Create a provider component
export const ServiceProviderProvider = ({ children }) => {
  const [showServices, setShowServices] = useState(false);
  const [fetchServiceProviders, setFetchServiceProviders] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const services = [
    "Hair Cut",
    "Facial",
    "Makeup",
    "Spa",
    "Hair Coloring",
    "Waxing",
    "Threading",
  ];
  const [serviceProvidersData, setServiceProvidersData] = useState({
    name: "",
    shopName: "",
    phoneNumber: "",
    email: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    services: [],
    availableAtHome: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceProvidersData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setServiceProvidersData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((s) => s !== value),
    }));
  };

  const handleAvailableAtHomeChange = (e) => {
    const { name, value, type, checked } = e.target;
    setServiceProvidersData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:5000/service-providers/${editingId}`
      : "http://localhost:5000/service-providers";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceProvidersData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message || "Success");
        setServiceProvidersData({
          name: "",
          shopName: "",
          phoneNumber: "",
          email: "",
          address: "",
          landmark: "",
          city: "",
          state: "",
          pincode: "",
          services: [],
          availableAtHome: false,
        });
        setEditingId(null);
      } else {
        alert(data.message || "Error occurred");
      }
    } catch (err) {
      console.error("fetch err", err);
    }
  };

  const handleEdit = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `http://localhost:5000/service-providers/${id}`
      );
      const result = await response.json();
      const data = result.data;
      if (response.ok) {
        setServiceProvidersData({
          name: data.name,
          shopName: data.shopName,
          phoneNumber: data.phoneNumber,
          email: data.email,
          address: data.address,
          landmark: data.landmark,
          city: data.city,
          state: data.city,
          pincode: data.pincode,
          services: data.service,
          availableAtHome: data.availableAtHome,
        });
        setEditingId(id);
      } else {
        alert("Failed to fetch supplier data");
      }
    } catch (error) {
      console.error("Error fetching supplier:", error);
    }
  };

  return (
    <ServiceProviderContext.Provider
      value={{
        showServices,
        setShowServices,
        services,
        serviceProvidersData,
        setServiceProvidersData,
        handleChange,
        handleServiceChange,
        handleAvailableAtHomeChange,
        handleSubmit,
        fetchServiceProviders,
        setFetchServiceProviders,
        handleEdit,
        editingId,
        setEditingId,
      }}
    >
      {children}
    </ServiceProviderContext.Provider>
  );
};

export const useServiceProvider = () => useContext(ServiceProviderContext);
