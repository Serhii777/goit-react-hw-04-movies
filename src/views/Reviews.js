import React, { Component } from "react";
import moviesAPI from "../services/moviesAPI";
import Spinner from "../components/Spinner";
import "./Reviews.css";

export default class Reviews extends Component {
  state = {
    comments: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    const { match } = this.props;

    moviesAPI
      .fetchMovieReview(match.params.movieId)
      .then((comments) => this.setState({ comments }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { comments, loading } = this.state;

    return (
      <div className="reviews-wrapper">
        {loading && <Spinner />}
        {comments.length > 0 && (
          <ul className="reviews-list">
            {comments.map((comment) => (
              <li key={comment.id} className="reviews-item">
                <h4 className="reviews-title">Author: {comment.author}</h4>
                <p className="reviews-text">{comment.content}</p>
              </li>
            ))}
          </ul>
        )}
        {comments.length === 0 && (
          <p className="reviews-text">We don't have any reviews for this movie.</p>
        )}
      </div>
    );
  }
}
