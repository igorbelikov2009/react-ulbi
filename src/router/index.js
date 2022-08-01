import About from "../routes/About";
import Login from "../routes/Login";
import Post from "../routes/Post";
import PostIdPage from "../routes/PostIdPage";

export const privateRoutes = [
  { path: "/about/", component: About, exact: true },
  { path: "/post/", component: Post, exact: true },
  { path: "/post/:id", component: PostIdPage, exact: true },
];

export const publicRoutes = [
  { path: "/login/", component: Login, exact: true },
];
