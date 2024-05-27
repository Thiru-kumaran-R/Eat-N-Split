import Button from "./Button";

export default function Friends({ friends, onShowSplit, showSplit }) {
  return (
    <li className={showSplit?.name === friends.name ? "selected" : ""}>
      <img src={friends.image} alt="profile" />
      <h3> {friends.name} </h3>
      {friends.balance < 0 ? (
        <p className="red">
          You owe {friends.name} {Math.abs(friends.balance)}$
        </p>
      ) : (
        <p className="green">
          {friends.name} owes you {Math.abs(friends.balance)}$
        </p>
      )}
      <Button onClick={() => onShowSplit(friends)}>
        {showSplit?.name === friends.name ? "Close" : "Select"}
      </Button>
    </li>
  );
}
