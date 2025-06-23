// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Country from "./components/Country";
import Contact from "./components/Contact";
import CountryDetails from "./components/CountryDetails";
import { AppLayout } from "./components/AppLayout";
import { Errorpage } from "./components/Errorpage";
import { ThemeContextProvider } from "./components/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/country", element: <Country /> },
      { path: "/contact", element: <Contact /> },
      { path: "/countrydetails/:countryName", element: <CountryDetails /> },
    ],
  },
]);

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
