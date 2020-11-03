import React, { Component } from "react";
import moviesAPI from "../services/moviesAPI";
import Spinner from "../components/Spinner";
import "./Cast.css";

export default class Cast extends Component {
  state = {
    actors: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    const { match } = this.props;

    moviesAPI
      .fetchMovieCast(match.params.movieId)
      .then((actors) => this.setState({ actors }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { actors, loading } = this.state;

    return (
      <ul className="cast-list">
        {loading && <Spinner />}
        {actors &&
          actors.map((actor) => (
            <li key={actor.id} className="cast-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width="160"
                className="cast-image"
              />
              <h4 className="cast-title">{actor.name}</h4>
              <p className="cast-text">Character: {actor.character}</p>
            </li>
          ))}
      </ul>
    );
  }
}
