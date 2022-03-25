import { Avatar } from "@material-ui/core";
import { ImageOutlined, InsertLinkOutlined } from "@material-ui/icons";
import React from "react";

const CreatePost = () => {
  return (
    <div className="createPost">
      <Avatar
        alt="Dadip Bhattarai"
        src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"
        sx={{ width: 20, height: 20 }}
      />
      <input type="text" placeholder="Create Post" />
      <ImageOutlined fontSize="large" />
      <InsertLinkOutlined fontSize="large" className="insert" />
    </div>
  );
};

export default CreatePost;
