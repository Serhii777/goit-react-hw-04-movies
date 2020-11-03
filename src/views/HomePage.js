import React, { Component } from "react";
import { Link } from "react-router-dom";
import moviesAPI from "../services/moviesAPI";
import Spinner from "../components/Spinner";
import './HomePage.css'

export default class HomePage extends Component {
  state = {
    movies: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.fetchTrendingMoviesHome();
  }

  fetchTrendingMoviesHome() {
    this.setState({ loading: true });

    moviesAPI
      .fetchTrendingMovies()
      .then((movies) => {
        this.setState({ movies });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { movies, loading } = this.state;
    const { match } = this.props;

    return (
      <div className="homepage">
        <h1 className="homepage-title">Trending today</h1>

        {loading && <Spinner />}

        <ul className="homepage-list">
          {movies.map((movie) => (
            <li key={movie.id} className="homepage-item">
              <Link
                to={{
                  pathname: `${match.url}movies/${movie.id}`,
                  state: { from: this.props.location },
                }}>
                {movie.title} {movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
