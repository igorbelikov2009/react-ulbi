import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "гг", body: "сс" },
    { id: 2, title: "яя", body: "аа" },
    { id: 3, title: "аа", body: "пп" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPost = (sort) => {
    // console.log(sort);
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />

      <hr style={{ margin: "15px 0" }} />

      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue="Сортировка по"
          option={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>

      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Список постов 2" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
//  управляемый компонент, это компонент, в котором мы можем изменить значение [value], изменив его состояние [setValue]
