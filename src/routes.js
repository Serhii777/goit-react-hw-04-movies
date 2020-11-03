import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import("./views/HomePage.js" /* webpackChunkName: "homePage-view" */)
    ),
  },

  {
    path: "/movies/:movieId",
    label: "MovieDetailsPage",
    exact: false,
    component: lazy(() =>
      import(
        "./views/MovieDetailsPage" /* webpackChunkName: "movieDetailsPage-view" */
      )
    ),
  },

  {
    path: "/movies/:movieId/cast",
    label: "Cast",
    exact: false,
    component: lazy(() =>
      import("./views/Cast" /* webpackChunkName: "cast-view" */)
    ),
  },

  {
    path: "/movies/:movieId/reviews",
    label: "Reviews",
    exact: false,
    component: lazy(() =>
      import("./views/Reviews.js" /* webpackChunkName: "reviews-view" */)
    ),
  },

  {
    path: "/movies",
    label: "Movies",
    exact: false,
    component: lazy(() =>
      import("./views/MoviesPage" /* webpackChunkName: "moviesPage-view" */)
    ),
  },

  {
    path: "/",
    label: "NotFound",
    exact: false,
    component: lazy(() =>
      import("./views/NotFound" /* webpackChunkName: "notFound-view" */)
    ),
  },
];
