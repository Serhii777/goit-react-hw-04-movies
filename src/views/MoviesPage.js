import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import moviesAPI from "../services/moviesAPI";
import getQueryParams from "../utils/getQueryParams";
import Spinner from "../components/Spinner";

import SearchBox from "../components/SearchBox";
import "./MoviesPage.css";

class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      return this.fetchMovies(query);
    }
    moviesAPI
      .fetchTrendingMovies()
      .then((movies) => {
        this.setState({ movies });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = (query) => {
    this.setState({ loading: true });

    moviesAPI
      .fetchMoviesWithQuery(query)
      .then((movies) => this.setState({ movies }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading } = this.state;
    const { match } = this.props;

    return (
      <div className="moviespage">
        <SearchBox onSubmit={this.handleChangeQuery} />
        {loading && <Spinner />}
        {movies && (
          <ul className="moviespage-list">
            {movies.map((movie) => (
              <li key={movie.id} className="moviespage-item">
                <NavLink
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}>
                  {movie.title ? movie.title : movie.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
        {movies.length === 0 && (
          <div className="error-wrapper">
            <p className="error-text">
              Unfortunately, no such movies was found, try changing your search
              parameters!
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default MoviesPage;
