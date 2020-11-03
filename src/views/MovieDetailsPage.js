import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import routes from "../routes";
import moviesAPI from "../services/moviesAPI";
import Spinner from "../components/Spinner";
import Cast from "../views/Cast";
import Reviews from "../views/Reviews";
import image from "../images/no_photo.png";
import "./MoviewDetailsPage.css";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    moviesAPI
      .fetchMoviesDetails(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  handleGoBack = () => {
    const moviesPagePath = routes
      .filter((route) => route.label === "Movies")
      .map((route) => route.path);

    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(moviesPagePath);
  };

  render() {
    const { movie, loading } = this.state;
    const { match } = this.props;

    let movieName = "";

    if (movie) {
      movieName = movie.title ? movie.title : movie.name;
    }

    return (
      <div className="detailspage-wrapper">
        <button
          type="button"
          onClick={this.handleGoBack}
          className="detailspage-button">
          {" "}
          &larr; Go back
        </button>
        {loading && <Spinner />}

        {movie && (
          <div className="detailspage-card">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : `${image}`
              }
              alt={movie.title}
              width="320"
              className="detailspage-image"
            />
            <div className="detailspage-card-description">
              <h2 className="detailspage-card-title">
                {movieName
                  ? `${movie.title} (${movie.release_date.slice(0, 4)})`
                  : `${movie.status_message}`}
              </h2>
              <span className="detailspage-score">
                {movie.vote_average
                  ? ` User Score: ${movie.vote_average * 10} %`
                  : " "}
              </span>
              <div />
              <div className="detailspage-overview-wrapper">
                <h3
                  className={
                    movie.status_message
                      ? "wrapper-hidden"
                      : "detailspage-overview"
                  }>
                  Overview
                </h3>
                <p className="detailspage-overview-text">{movie.overview}</p>
              </div>
              <div className="detailspage-genres-wrapper">
                <h4
                  className={
                    movie.status_message
                      ? "wrapper-hidden"
                      : "detailspage-genres"
                  }>
                  Genres
                </h4>
                <span className="detailspage-genres-list">
                  {movie.genres
                    ? movie.genres.map((genre) => genre.name).join(" , ")
                    : ""}
                </span>
              </div>
            </div>
          </div>
        )}

        {movie && (
          <>
            <div
              className={
                movie.status_message ? "wrapper-hidden" : "line"
              }></div>

            <div
              className={
                movie.status_message ? "wrapper-hidden" : "additional-wrapper"
              }>
              <h4 className="additional-title">Additional information</h4>
              <ul className="additional-list">
                <li className="additional-item">
                  <Link
                    to={{
                      pathname: `${match.url}/cast`,
                      state: { from: this.props.location },
                    }}>
                    Cast
                  </Link>
                </li>
                <li className="additional-reviews">
                  <Link
                    to={{
                      pathname: `${match.url}/reviews`,
                      state: { from: this.props.location },
                    }}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className={
                movie.status_message ? "wrapper-hidden" : "line"
              }></div>

            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </>
        )}
      </div>
    );
  }
}
