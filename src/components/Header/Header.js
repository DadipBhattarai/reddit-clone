import React from "react";
import Logo from "./Logo";
import Activity from "./Activity";
import Icon from "./Icon";
import "./Header.scss";
import Search from "./Search";
import User from "./User";
import {
  NewReleasesOutlined,
  BorderColorOutlined,
  CopyrightOutlined,
  BorderAllOutlined,
  FlashOnOutlined,
  AdjustOutlined,
  WorkOutlineSharp,
  HelpOutline,
  OpenInNewOutlined,
  CallMadeOutlined,
} from "@material-ui/icons";

const moreStuffs = [
  {
    icon: <BorderColorOutlined />,
    name: "Create a Community",
  },
  {
    icon: <NewReleasesOutlined />,
    name: "Adverties on Reddit",
  },
  {
    icon: <CopyrightOutlined />,
    name: "Coins",
  },
  {
    icon: <BorderAllOutlined />,
    name: "Premium",
  },
  {
    icon: <FlashOnOutlined />,
    name: "Powerups",
  },
  {
    icon: <AdjustOutlined />,
    name: "Talk",
  },
  {
    icon: <WorkOutlineSharp />,
    name: "Prediction",
  },
  {
    icon: <HelpOutline />,
    name: "Help Center",
  },
  {
    icon: <OpenInNewOutlined />,
    name: "Visit Old Reddit",
  },
  {
    icon: <CallMadeOutlined />,
    name: "Log Out",
  },
];

const Header = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <Activity />
        <Search />
        <Icon />
        <User moreStuffs={moreStuffs} />
      </div>
      <hr />
    </>
  );
};

export default Header;
