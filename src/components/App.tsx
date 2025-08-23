import React from "react";
import ReactDOM from "react-dom/client";
import { Logo } from "./header/Logo";
import { NavigationBar } from "./header/NavigationBar";
import { MainContent } from "./MainContent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./header/AboutUs";
import ContactUs from "./ContactUs";
import { createTheme, ThemeProvider } from "@mui/material";
import Services from "./Services";

const AppLayout = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Logo />
        <NavigationBar />
      </div>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <h1>404 Not Found!</h1>,
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
  <ThemeProvider theme={theme}>
    <RouterProvider router={appRouter} />
  </ThemeProvider>
);