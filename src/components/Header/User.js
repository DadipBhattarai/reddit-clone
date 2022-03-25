import { Avatar } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";

import {
  BrightnessLowRounded,
  ExpandMoreOutlined,
  ToggleOff,
  ToggleOn,
  AccessibilityOutlined,
  AccountCircleOutlined,
  SettingsOutlined,
  Brightness2Outlined,
} from "@material-ui/icons";

const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

const stuffes = [
  {
    icon: <AccountCircleOutlined />,
    name: "Profile",
  },
  {
    icon: <AccessibilityOutlined />,
    name: "Style Avatar",
  },
  {
    icon: <SettingsOutlined />,
    name: "User Settings",
  },
];

const User = ({ moreStuffs }) => {
  const [user, setUser] = useState(false);

  const [status, setStatus] = useState();

  const [mode, setMode] = useState();

  const domNode = useClickOutside(() => {
    setUser(false);
  });

  const handleStatus = () => {
    setStatus(!status);
  };

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <div ref={domNode}>
      <div className="user" onClick={() => setUser((user) => !user)}>
        <div className="userInfo">
          <div className="avatar">
            <Avatar
              alt="Dadip Bhattarai"
              src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"
              sx={{ width: 20, height: 20 }}
            />
          </div>
          <div className="userName">
            <small>the_Deep3</small>
            <span>
              <BrightnessLowRounded className="iconBatch" />
              <small>1 kerma</small>
            </span>
          </div>
        </div>
        <div className="expandIcon">
          <ExpandMoreOutlined />
        </div>
      </div>
      {user && (
        <div className="subUser">
          <div className="userTitle">
            <small>Online status</small>
            <div onClick={handleStatus}>
              {status ? (
                <div className="status">
                  <p>On</p>
                  <ToggleOn fontSize="large" />
                </div>
              ) : (
                <div className="status">
                  <p>Off</p>
                  <ToggleOff fontSize="large" />
                </div>
              )}
            </div>
          </div>
          <div className="userTitle">
            <small>My Stuff</small>
            {stuffes.map((stuf) => (
              <div className="stuffs">
                {stuf.icon} <p>{stuf.name}</p>
              </div>
            ))}
          </div>
          <div className="userTitle">
            <small>view options</small>
            <div className="mode" onClick={handleMode}>
              <Brightness2Outlined style={{ transform: "rotate(40deg)" }} />
              <p>Dark Mode</p>
              {mode ? (
                <ToggleOn fontSize="large" />
              ) : (
                <ToggleOff fontSize="large" />
              )}
            </div>
          </div>
          <div className="userTitle">
            <small>More Stuff</small>
            {moreStuffs.map((stuffs) => (
              <div className="moreStuff">
                {stuffs.icon}
                <p>{stuffs.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
