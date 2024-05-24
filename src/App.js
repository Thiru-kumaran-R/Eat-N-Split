import "./App.css";
import  Button  from "./Button";
import Friends from "./Friends";

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
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
      </div>
    </div>
  );
}

function FriendsList() {
  return (
    <ul>
      {initialFriends.map((frnd) => (
        <Friends friends={frnd} key={frnd.id} />
      ))}
    </ul>
  );
}

function FormAddFrnd() {
  return (
    <form className="form-add-friend">
      <label> 👬 Friend name </label>
      <input type="text" />

      <label> 🌄 Image URL </label>
      <input type="text" />

      <Button> add friend </Button>
    </form>
  );
}
