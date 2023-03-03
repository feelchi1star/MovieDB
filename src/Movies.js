import React from "react";
import { useGlobalContext } from "./context";
import { Link, Outlet } from "react-router-dom";
import "./movie.css";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="movies">
      {movie.map((item) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = item;
        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              <img src={poster === "N/A" ? url : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
      <Outlet />
    </section>
  );
};

export default Movies;
