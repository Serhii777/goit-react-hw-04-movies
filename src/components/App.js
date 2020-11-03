import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import routes from "../routes";
import Layout from "./Layout/Layout";
import Spinner from "./Spinner/Spinner";

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
