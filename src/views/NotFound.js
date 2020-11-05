import React from "react";
import { Link } from "react-router-dom";
import imageError from "../images/404-not-found-error-404.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="error-wrapper">
      <h1 className="error-title">Error!</h1>
      <img
        src={imageError}
        alt="Movies did't found"
        width="320"
        className="error-img"
      />
      <p className="error-text">
        Упс, что-то пошло не так. Вот{" "}
        <Link to="/">
          <span className="error-span">ссылка</span>
        </Link>{" "}
        на главную страницу
      </p>
    </div>
  );
};

export default NotFound;
