import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";

import Cutting_Board_Cleaning from "./components/Cutting_Board_Cleaning";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Cutting_Board_Cleaning" element={<Cutting_Board_Cleaning />} />

    </Routes>
  </BrowserRouter>,
  rootElement
);
