import {
  AcUnitOutlined,
  BarChartOutlined,
  BrightnessLowOutlined,
  CreditCard,
  ExpandMore,
  ListAltOutlined,
  MenuOutlined,
  MoreHoriz,
  OpacityOutlined,
} from "@material-ui/icons";
import React, { useState, useRef, useEffect } from "react";

const catItems = [
  {
    id: 1,
    icon: <AcUnitOutlined />,
    name: "Best",
  },
  {
    id: 2,
    icon: <OpacityOutlined />,
    name: "Hot",
  },
  {
    id: 3,
    icon: <BrightnessLowOutlined />,
    name: "New",
  },
  {
    id: 4,
    icon: <BarChartOutlined />,
    name: "Top",
  },
  {
    id: 5,
    icon: <ExpandMore />,
    name: "Today",
  },
  {
    icon: <MoreHoriz />,
  },
];

const modItems = [
  {
    id: 1,
    icon: <CreditCard />,
    name: "Card",
  },
  {
    id: 2,
    icon: <ListAltOutlined />,
    name: "Classic",
  },
  { id: 3, icon: <MenuOutlined />, name: "Compact" },
];

const useClickOutside = (handler) => {
  const menuRef = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return menuRef;
};

const ListView = ({ modId }) => {
  const listView = modItems.map((mod) => {
    if (mod.id === modId) {
      return <span>{mod.icon}</span>;
    }
  });

  return <div>{listView}</div>;
};

const CategoryItem = () => {
  const [activeId, setActiveId] = useState(1);
  const [mode, setMode] = useState(false);

  const [modId, setModId] = useState(1);

  const modClickHandler = (id) => {
    setModId(id);
  };

  const mod = modItems.map((mod) => {
    return (
      <li onClick={() => modClickHandler(mod.id)}>
        {mod.icon}
        <samll>{mod.name}</samll>
      </li>
    );
  });

  const handleMode = () => {
    setMode(!mode);
  };

  const menuRef = useClickOutside(() => {
    setMode(false);
  });

  return (
    <div className="categoryItem">
      <div className="items">
        <ul>
          {catItems.map((category, index) => {
            const classname = activeId === index + 1 ? "active" : "";
            return (
              <li onClick={() => setActiveId(index + 1)} className={classname}>
                {category.icon}
                <h5>{category.name}</h5>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mode" ref={menuRef}>
        <div className="modeSelection" onClick={handleMode}>
          <ListView modId={modId} />
          <ExpandMore />
        </div>

        {mode && (
          <div className="subMode">
            {/* <ul>{mod}</ul> */}

            <ul>
              {modItems.map((mode, index) => {
                const classname = modId === index + 1 ? "active" : "";

                return (
                  <li onClick={() => setModId(index + 1)} className={classname}>
                    {mode.icon}
                    <small>{mode.name}</small>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryItem;
