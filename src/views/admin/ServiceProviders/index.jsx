import ServiceProviderForm from "./Components/ServiceProviderForm";
import ServiceProvidersTable from "./Components/ServiceProvidersTable";
import { Link, Route, Routes, useLocation } from "react-router-dom";
const ServiceProviders = () => {
  const location = useLocation();
  const isFormPage = location.pathname.endsWith("/ServiceProviderForm");
  return (
    <>
      <Routes>
        <Route path="ServiceProvidersForm" element={<ServiceProviderForm />} />
      </Routes>
      {isFormPage && (
        <div>
          <div className="my-2">
            <h1 className="text-center text-3xl font-bold text-[#005558]">
              Service Providers
            </h1>
            <p className="text-end">
              <Link
                to="/admin/service-providers/ServiceProvidersForm"
                className="mr-16 rounded bg-green-400 px-8 py-2 font-medium text-white"
              >
                Book
              </Link>
            </p>
          </div>

          <ServiceProvidersTable />
        </div>
      )}
    </>
  );
};

export default ServiceProviders;
