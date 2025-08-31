import React, { lazy, StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import { Logo } from "./header/Logo";
import Header from "./header/Header";
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
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const Grocery = lazy(() => import("./Grocery"));
const AboutUs = lazy(() => import("./header/AboutUs"));
const ContactUs = lazy(() => import("./ContactUs"));
const RestaurantMenu = lazy(() => import("./RestaurantMenu"));
const Cart = lazy(() => import("./Cart"));

const AppLayout = () => {
  const [user, setUser] = useState({ name: "Guest", email: "" });
  return (
    <Provider store={appStore}>
    <div className="app-container">
      <UserContext.Provider value={{user, setUser}}>
      <div className="header-container">
        <Logo />
        <Header />
      </div>
      <Outlet />
      </UserContext.Provider>
    </div>
    </Provider>
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
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/groceries",
        // element: <React.Suspense fallback={<h1>Loading...</h1>}><Grocery /></React.Suspense>
                element: <Grocery />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
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