import React from 'react'
import { useServiceProvider } from "context/ServiceProviderContext";
const ServiceProviderForm = () => {

    const { showServices, setShowServices, services, serviceProvidersData, handleChange, handleServiceChange, handleAvailableAtHomeChange, handleSubmit, isEditing} = useServiceProvider();


  return (
     <section className="mb-8 space-y-6 rounded-xl bg-white p-12 shadow-md">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-[#005558]">
            Add Service Provider
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-bold">Full Name</label>
              <input
                name="name"
                className="mt-1 w-full rounded-2xl border px-3 py-3 focus:outline-none"
                placeholder="Your Name"
                value={serviceProvidersData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-bold">Shop Name</label>
              <input
                name="shopName"
                className="mt-1 w-full rounded-2xl border px-3 py-3 focus:outline-none"
                placeholder="Your Shop Name"
                value={serviceProvidersData.shopName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-bold">Phone Number</label>
              <input
                name="phoneNumber"
                className="mt-1 w-full rounded-2xl border px-3 py-3 focus:outline-none"
                placeholder="Your Number"
                value={serviceProvidersData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-bold">Email Address</label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-2xl border px-3 py-3 focus:outline-none"
                placeholder="example@gmail.com"
                value={serviceProvidersData.email}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold">Address</label>
              <textarea
                name="address"
                className="mt-1 w-full rounded-2xl border px-3 py-3 focus:outline-none"
                rows="3"
                placeholder="Your Shop Address"
                value={serviceProvidersData.address}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-bold">Landmark</label>
              <input
                name="landmark"
                className="mt-1 w-full rounded-2xl border px-3 py-3 focus:outline-none"
                placeholder="Your Landmark"
                value={serviceProvidersData.landmark}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-bold">City</label>
              <input
                name="city"
                className="mt-1 w-full rounded-2xl border px-3 py-3 focus:outline-none"
                placeholder="Your City"
                value={serviceProvidersData.city}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-bold">State</label>
              <input
                name="state"
                className="mt-1 w-full rounded-2xl border px-3 py-3 focus:outline-none"
                placeholder="Your State"
                value={serviceProvidersData.state}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-bold">Pincode</label>
              <input
                name="pincode"
                className="mt-1 w-full rounded-2xl border px-3 py-3 focus:outline-none"
                placeholder="Your Pincode"
                value={serviceProvidersData.pincode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="mb-2 mt-3 block text-sm font-bold">
              Services Type
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowServices(!showServices)}
                className="flex w-full items-center justify-between rounded-2xl border px-3 py-3 text-left"
              >
                {serviceProvidersData.services.length > 0
                  ? serviceProvidersData.services.join(", ")
                  : "Select Services"}
                <span className="ml-2">▼</span>
              </button>

              {showServices && (
                <div className="absolute z-10 mt-1 grid w-full grid-cols-2 gap-2 rounded border bg-white p-3 shadow">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        value={service}
                        checked={serviceProvidersData.services.includes(
                          service
                        )}
                        onChange={handleServiceChange}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div>
            <label className="mt-3 inline-flex items-center">
              <input
                type="checkbox"
                name="availableAtHome"
                className="mr-2"
                checked={serviceProvidersData.availableAtHome}
                onChange={handleAvailableAtHomeChange}
              />
              Available for Home Service
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded bg-teal-600 px-6 py-2 text-white hover:bg-teal-700 focus:outline-none"
            >
             {isEditing ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </section>
  )
}

export default ServiceProviderForm