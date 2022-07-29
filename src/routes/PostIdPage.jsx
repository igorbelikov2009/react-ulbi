import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComment, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComment(params.id);
  }, []);
  //    не забываем добавлять массив зависимостей [] в  useEffect

  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>

      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}

      <h1>Комментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((coom) => (
            <div style={{ marginTop: "5px" }}>
              <h5>{coom.email} </h5>
              <div>{coom.body} </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
