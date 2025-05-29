import ServiceProviderForm from "./Components/ServiceProviderForm";
import ServiceProvidersTable from "./Components/ServiceProvidersTable";
import { Link, useLocation } from "react-router-dom";
const ServiceProviders = () => {

  const location = useLocation();

  const isFormPage = location.pathname.includes("/ServiceProvidersForm");

  return (
     <div className="my-2">
      {!isFormPage ? (
        <>
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
          <ServiceProvidersTable />
        </>
      ) : (
        <ServiceProviderForm />
      )}
    </div>
  );
};

export default ServiceProviders;
