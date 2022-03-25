import {
  Add,
  ChevronLeft,
  ExpandMore,
  Home,
  StarOutline,
  SystemUpdate,
} from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";

const channelProfile = [
  {
    icon: "😀",
    name: "r/comicbook",
  },
  {
    icon: "😀",
    name: "r/bitcoin",
  },
  {
    icon: "😀",
    name: "r/dogecoin",
  },
  {
    icon: "😀",
    name: "r/reactjs",
  },
  {
    icon: "😀",
    name: "r/gadgets",
  },
  {
    icon: "😀",
    name: "r/hardware",
  },
  {
    icon: "😀",
    name: "r/linux",
  },
  {
    icon: "😀",
    name: "r/learnprogramming",
  },
  {
    icon: "😀",
    name: "r/news",
  },
  {
    icon: "😀",
    name: "r/scifi",
  },
  {
    icon: "😀",
    name: "r/tech",
  },
  {
    icon: "😀",
    name: "r/technews",
  },
  {
    icon: "😀",
    name: "r/webdev",
  },
];

const useClickOutside = (handler) => {
  const menuRef = useRef();

  useEffect(() => {
    const maybeHandle = (event) => {
      if (!menuRef.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandle);
    return () => {
      document.removeEventListener("mousedown", maybeHandle);
    };
  });
  return menuRef;
};

const Activity = (props) => {
  const [activities, setActivities] = useState(false);
  const [search, setSearch] = useState("");

  // const handleActivity = () => {
  //   setActivities(!activities);
  // };

  const menuRef = useClickOutside(() => {
    setActivities(false);
  });

  const handleSearch = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };

  const filterCommunities = channelProfile.filter((channel) => {
    return (
      channel.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !==
      -1
    );
  });

  return (
    <div ref={menuRef}>
      <div
        onClick={() => setActivities((activities) => !activities)}
        className="activity"
      >
        <div className="home">
          <Home />
          <p>Home</p>
        </div>
        <div className="more">
          {activities && (
            <div>
              <div>
                <SystemUpdate className="clickMore" />
                <ChevronLeft fontSize="small" />
              </div>
              <div className="community">
                <input
                  type="text"
                  onChange={handleSearch}
                  placeholder="Filter"
                  autoFocus
                />
                <div className="channel">
                  <small>My Communities</small>
                  <div className="createCommunity">
                    <Add fontSize="large" />
                    <p>Create Community</p>
                  </div>

                  {filterCommunities.map((profile) => (
                    <div className="communities">
                      <div className="communityName">
                        <p>{profile.icon}</p>
                        <p>{profile.name}</p>
                      </div>
                      <StarOutline />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <ExpandMore />
        </div>
      </div>
    </div>
  );
};

export default Activity;
