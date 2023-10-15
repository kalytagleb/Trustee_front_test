import React from "react";
import { Route, Routes } from "react-router";
import AboutUs from "../pages/AboutUs";
import Meeting from "../pages/Meeting";
import Error from "../pages/Error";
import Cinema_Schedule from "../pages/Cinema_Schedule";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutUs />}></Route>
      <Route path="/meetings" element={<Meeting />}></Route>
      <Route path="/cinema" element={<Cinema_Schedule />}></Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
