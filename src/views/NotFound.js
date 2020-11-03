import React from "react";
import { Link } from "react-router-dom";
import imageError from "../images/404-not-found-error-404.jpg";
import routes from "../routes";

const NotFound = () => {
  const moviesPagePath = routes
  .filter((route) => route.label === "Home")
  .map((route) => route.path);

  console.log(moviesPagePath);

  return (
    <div>
      <h1>Error</h1>
      <img src={imageError} alt="Movies did't found" width="320" />
      <p>
        Упс, что-то пошло не так. Вот <Link to={moviesPagePath}> ссылка </Link> на главную страницу
      </p>
    </div>
  );
};

export default NotFound;
