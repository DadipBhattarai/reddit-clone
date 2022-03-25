import React from "react";
import CategoryItem from "./CategoryItem";
import Content from "./Content";
import CreatePost from "./CreatePost";
import Test from "./Test";

const LeftBody = () => {
  return (
    <div className="leftBody">
      <CreatePost />
      <CategoryItem />
      <Content />
      <Test />
    </div>
  );
};

export default LeftBody;
