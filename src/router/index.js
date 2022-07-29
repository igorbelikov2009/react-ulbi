import About from "../routes/About";
import Post from "../routes/Post";
import PostIdPage from "../routes/PostIdPage";

export const routes = [
  { path: "/about/", component: About, exact: true },
  { path: "/post/", component: Post, exact: true },
  { path: "/post/:id", component: PostIdPage, exact: true },
];
