import React, { useState } from "react";

const listItems = [
  { id: "0", title: "One", content: " I AM ONE" },
  { id: "1", title: "Two", content: " I AM TWO" },
  { id: "2", title: "Three", content: " I AM THREE" },
];

const ListView = ({ listId }) => {
  const listView = listItems.map((item) => {
    if (item.id === listId) {
      return <span>{item.content}</span>;
    }
  });

  return <div>{listView}</div>;
};

const Test = () => {
  //   const [showListView, setShowListView] = useState(false);
  const [listId, setListId] = useState(null);

  const listClickHandler = (id) => {
    setListId(id);
  };

  const list = listItems.map((item) => {
    return <li onClick={() => listClickHandler(item.id)}>{item.title}</li>;
  });

  return (
    <div className="App">
      <ul>{list}</ul>
      <ListView listId={listId} />
    </div>
  );
};

export default Test;
