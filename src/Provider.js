import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context";
import Home from "./Home";
import MovieApp from "./MovieApp";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";

const Provider = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="*" element={<h2>404 PAge Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default Provider;
