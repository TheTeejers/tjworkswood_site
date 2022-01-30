import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";

import Cutting_Board_Care from "./components/Cutting_Board_Care";
import Footer from "./components/Footer";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Cutting_Board_Care" element={<Cutting_Board_Care />} />
      <Route path="Projects" element={<App />} />
      <Route path="About" element={<App />} />
      <Route path="Contact" element={<App />} />


    </Routes>
  </BrowserRouter>,
  rootElement
);
