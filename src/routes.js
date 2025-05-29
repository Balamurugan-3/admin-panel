import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Settings from "views/admin/settings";
import Users from "views/admin/Users";
import AppointmentForm from "views/admin/appointmentForm/index";
import ServiceProviders from "views/admin/ServiceProviders";
// import NFTMarketplace from "views/admin/marketplace";
// import Profile from "views/admin/profile";
// import DataTables from "views/admin/tables";
// import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  // MdOutlineShoppingCart,
 MdBarChart,
  // MdPerson,
  MdLock,
  MdOutlineSettings,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";


const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Settings",
    layout: "/admin",
    path: "settings",
    component: <Settings />,
    icon: <MdOutlineSettings className="h-6 w-6" />,
    secondary: false,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "users",
    component: <Users />,
    icon: <FaUsers className="h-6 w-6" />,
    secondary: false,
  },
  {
    name: "Appointment",
    layout: "/admin",
    path: "appointment",
    component: <AppointmentForm />,
    icon: <FaRegCalendarAlt className="h-6 w-6" />,
    secondary: false,
  },
   {
    name: "Service Providers",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "service-providers",
    component: <ServiceProviders />,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
