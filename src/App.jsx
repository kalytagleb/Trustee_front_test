import React from 'react';
import "./styles/App.scss"
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import AboutUs from './pages/AboutUs';
import Meeting from './pages/Meeting';
import Navbar from './components/UI/navbar/Navbar';
import Error from './pages/Error';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;