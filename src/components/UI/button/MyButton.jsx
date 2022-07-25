import React from "react";
import classes from "./MyButton.module.css";

// const MyButton = (props) => {
//   return <button className={classes.myBtn}>{props.children}</button>;
// };

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
