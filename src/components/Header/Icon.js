import {
  BarChart,
  CallMadeRounded,
  Chat,
  VideocamRounded,
  NotificationsOutlined,
  Add,
  Copyright,
} from "@material-ui/icons";
import React from "react";

const Icon = () => {
  return (
    <div className="icons">
      <ul>
        <li>
          <CallMadeRounded />
        </li>
        <li>
          <BarChart />
        </li>
        <li>
          <VideocamRounded />
        </li>
        <hr />
        <li>
          <Chat />
        </li>
        <li>
          <NotificationsOutlined />
        </li>
        <li>
          <Add />
        </li>
        <li>
          <div className="free">
            <Copyright />
            <p>Free</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Icon;
