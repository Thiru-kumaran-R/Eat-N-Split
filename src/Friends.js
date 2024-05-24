import Button from "./Button";

export default function Friends({ friends }) {
  return (
    <li>
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
      <Button> select </Button>
    </li>
  );
}
