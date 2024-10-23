import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

<BrowserRouter>
  <Routes>
    <Route path="/social-links" element={<App />}>
      <Route index element={<App />} />
    </Route>
  </Routes>
</BrowserRouter>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
