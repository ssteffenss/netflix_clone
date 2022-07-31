import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './pages/Login/Home';
import Catalog from './pages/Catalog/Catalog';
import Movie from './pages/Movie/Movie';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalogo" element={<Catalog />} />
          <Route path="filme/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
