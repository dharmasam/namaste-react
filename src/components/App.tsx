import React, { lazy, StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import { Logo } from "./header/Logo";
import { NavigationBar } from "./header/NavigationBar";
import { MainContent } from "./MainContent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import AboutUs from "./header/AboutUs";
// import ContactUs from "./ContactUs";
import { createTheme, ThemeProvider } from "@mui/material";
// import Services from "./Services";
import ErrorPage from "./ErrorPage";
// import RestaurantMenu from "./RestaurantMenu";
// import Grocery from "./Grocery";
import { UserContext } from "../utils/UserContext";

const Grocery = lazy(() => import("./Grocery"));
const AboutUs = lazy(() => import("./header/AboutUs"));
const ContactUs = lazy(() => import("./ContactUs"));
const Services = lazy(() => import("./Services"));
const RestaurantMenu = lazy(() => import("./RestaurantMenu"));

const AppLayout = () => {
  const [user, setUser] = useState({ name: "Guest", email: "" });
  return (
    <div className="app-container">
      <UserContext.Provider value={{user, setUser}}>
      <div className="header-container">
        <Logo />
        <NavigationBar />
      </div>
      <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainContent />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/groceries",
        // element: <React.Suspense fallback={<h1>Loading...</h1>}><Grocery /></React.Suspense>
                element: <Grocery />

      }
    ],
  },
  {
    path: "/about",
    element: <AboutUs />
  },
  {
    path: "/contactUs",
    element: <ContactUs />
  },
  {
    path: "/services",
    element: <Services />
  }
]);
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6600",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>

    <ThemeProvider theme={theme}>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </StrictMode>
);