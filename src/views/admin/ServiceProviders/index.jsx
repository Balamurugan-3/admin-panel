import ServiceProviderForm from "./Components/ServiceProviderForm";
import ServiceProvidersTable from "./Components/ServiceProvidersTable";
import { Link, useLocation } from "react-router-dom";
const ServiceProviders = () => {

  const location = useLocation();
  console.log(location);

  const isFormPage = location.pathname.includes("/ServiceProvidersForm");

  return (
     <div className="my-2">
      {!isFormPage ? (
        <>
          <h1 className="text-center text-3xl font-bold text-[#005558]">
            Service Providers
          </h1>
          <div className="text-end mb-8 ">
            <Link
              to="/admin/service-providers/ServiceProvidersForm"
              className="mr-16 rounded bg-[#367c84] px-4 py-2 font-medium text-white"
            >
              ADD Providers
            </Link>
          </div>
          <ServiceProvidersTable />
        </>
      ) : (
        <ServiceProviderForm />
      )}
    </div>
  );
};

export default ServiceProviders;
