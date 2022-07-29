import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import About from "../routes/About";
// import Post from "../routes/Post";
// import Error from "../routes/Error";
// import PostIdPage from "../routes/PostIdPage";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Switch>
      {/* <Route path="/about">
        <About />
      </Route>

      <Route exact path="/post">
        <Post />
      </Route>

      <Route exact path="/post/:id">
        <PostIdPage />
      </Route>

      <Route path="/error">
        <Error />
      </Route> */}
      {routes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}

      <Redirect to="/error" />
    </Switch>
  );
};

export default AppRouter;
