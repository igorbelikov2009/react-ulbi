import React from "react";
import { useHistory } from "react-router-dom";
import "../styles//PostItem.css";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  const router = useHistory();
  // console.log(router);

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>

        <div> {props.post.body} </div>
      </div>

      <div className="post__btns">
        <MyButton onClick={() => router.push(`/post/${props.post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
