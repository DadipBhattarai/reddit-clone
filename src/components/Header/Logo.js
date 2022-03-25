import { Reddit } from "@material-ui/icons";
import React from "react";
// import { ReactComponent as Reddit } from "../../Photos/LogoText.svg";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logoIcon">
        <Reddit />
      </div>
      <img
        src="https://www.logo.wine/a/logo/Reddit/Reddit-Wordmark-White-Dark-Background-Logo.wine.svg"
        alt="RedditText"
      />
    </div>
  );
};

export default Logo;
