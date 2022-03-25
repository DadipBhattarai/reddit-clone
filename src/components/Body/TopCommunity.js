import { Avatar } from "@material-ui/core";
import { ExpandLess } from "@material-ui/icons";
import React, { useState } from "react";

const communityTitle = [
  {
    image:
      "https://images.freeimages.com/images/small-previews/0f7/diversity-1-1184126.jpg",
    name: "Top News Communities",
    communities: [
      {
        icon: <Avatar alt="Nottheonion" />,
        community: "r/nottheonion",
      },
      {
        icon: <Avatar alt="UpliftingNews" />,
        community: "r/UpliftingNews",
      },
      {
        icon: <Avatar alt="Gamernews" />,
        community: "r/gamernews",
      },
      {
        icon: <Avatar alt="Ofbeat" />,
        community: "r/ofbeat",
      },
      {
        icon: <Avatar alt="Savedyouaclick" />,
        community: "r/savedyouaclick",
      },
    ],
  },
  {
    image:
      "https://media.istockphoto.com/photos/group-of-friends-huddle-in-rear-view-together-picture-id668218790?b=1&k=20&m=668218790&s=170667a&w=0&h=J3G9l1SxjurFMUExIH0tLiHLI2LSKy8COYgSwOe0DEc=",
    name: "Today's Top Growing Communities",
    communities: [
      {
        icon: <Avatar alt="" />,
        community: "r/Eldering",
      },
      {
        icon: <Avatar alt="Ukraine" />,
        community: "r/ukraine",
      },
      {
        icon: <Avatar alt="MadeMeSmile" />,
        community: "r/MadeMeSmile",
      },
      {
        icon: <Avatar alt="Dataisbeautiful" />,
        community: "r/dataisbeautiful",
      },
      {
        icon: <Avatar alt="Science" />,
        community: "r/science",
      },
    ],
  },
  {
    image:
      "https://image.shutterstock.com/image-vector/community-concept-illustration-young-people-260nw-490135921.jpg",
    name: "Top  Gaming  Communities",
    communities: [
      {
        icon: <Avatar alt="pokemon" />,
        community: "r/pokemon",
      },
      {
        icon: <Avatar alt="pcmasterrace" />,
        community: "r/pcmasterrace",
      },
      {
        icon: <Avatar src="gtaon" />,
        community: "r/gtaonline",
      },
      {
        icon: <Avatar src="pockmongo" />,
        community: "r/pockmongo",
      },
      {
        icon: <Avatar src="" />,
        community: "r/Guildwars2",
      },
    ],
  },
];

const TopCommunity = () => {
  const trending = ["Near You", "Gaming", "Aww", "Sports"];

  return (
    <div className="topCommunity">
      {communityTitle.splice(0, 1).map((title) => (
        <div>
          <div className="topCategory">
            <img src={title.image} alt="community_image" />
            <span>{title.name}</span>
          </div>
          {title.communities.map((comm, index) => (
            <>
              <div className="topCommunities">
                <div className="communityDet">
                  <span>{index + 1}</span>
                  <ExpandLess
                    style={{
                      color: "green",
                      fontSize: "30px",
                      margin: "0 3px",
                    }}
                  />
                  <img
                    alt="Dadip"
                    src="https://www.asciiartguru.com/parson.png"
                  />
                  <p>{comm.community}</p>
                </div>
                <Toggle />
              </div>
              <hr />
            </>
          ))}
        </div>
      ))}
      <div className="viewAll">
        <b>View All</b>
      </div>

      <div className="trending">
        {trending.map((trend) => (
          <li>
            <b>{trend}</b>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TopCommunity;

const Toggle = () => {
  const [join, setJoin] = useState(true);

  const handleJoin = () => {
    setJoin(!join);
  };

  return (
    <div onClick={handleJoin}>
      {join ? (
        <div className="join">
          <b>join</b>
        </div>
      ) : (
        <div className="leave">
          <b>Leave</b>
        </div>
      )}
    </div>
  );
};
