import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RandomBrewery from "./Pages/RandomBrewery";
import ListBreweries from "./Pages/ListBreweries";
import ThemeContextProvider from "./context/themeContext";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListBreweries />} />
        <Route path="/random" element={<RandomBrewery />} />
      </Routes>
    </BrowserRouter>
  </ThemeContextProvider>
);
