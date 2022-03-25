import { Container } from "@material-ui/core";
import React from "react";
import "./Body.scss";
import LeftBody from "./LeftBody";
import RightBody from "./RightBody";

const Body = () => {
  return (
    <div className="body">
      <LeftBody />
      <RightBody />
    </div>
  );
};

export default Body;
