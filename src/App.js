import "./App.css";
import Button from "./Button";
import FormAddFrnd from "./FormAddFrnd";
import Friends from "./Friends";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriends, setShowAddFriends] = useState(false);
  const [selectFriend, setSelectFriend] = useState(null);

  function handleShowFriends() {
    setShowAddFriends((prev) => {
      return !prev;
    });
  }

  function onsetFriends(newData) {
    setFriends((prev) => {
      return [...prev, newData];
    });

    setShowAddFriends((prev) => !prev);
  }

  function onShowSplit(friend) {
    setSelectFriend(prev => {
      return prev?.id === friend?.id ? null : friend
    });

  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          showSplit={selectFriend}
          onShowSplit={onShowSplit}
        />
        {showAddFriends && (
          <FormAddFrnd onSetFriends={onsetFriends} friends={friends} />
        )}
        <Button onClick={handleShowFriends}>
          {showAddFriends ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectFriend && <FormSplitBill selectFriend={selectFriend} />}
    </div>
  );
}

function FriendsList({ friends, showSplit, onShowSplit }) {
  return (
    <ul>
      {friends.map((frnd) => (
        <Friends
          friends={frnd}
          key={frnd.id}
          showSplit={showSplit}
          onShowSplit={onShowSplit}
        />
      ))}
    </ul>
  );
}
