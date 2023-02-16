import React from "react";
import "./username.css";

const Username = (props) => {
  return (
    <>
      <div className="username">
        <p>{props.username_text || "clg user"}</p>
      </div>
    </>
  );
};
export default Username;
