import { useState } from "react";
import Button from "./Button";
import "./index.css";

export default function FormSplitBill({ selectFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? +bill - +paidByUser : ""
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  return (
    <form className="form-split-bill">
      <h2>Split bill with {selectFriend.name} </h2>

      <label> 💰 Bill Value </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label> 🧍‍♂️ Your Expense </label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) => setPaidByUser(+e.target.value)}
      />

      <label> 👯‍♂️ {selectFriend.name} Expense </label>
      <input type="text" disabled  value={paidByFriend}/>

      <label> 🤑 Who's paying the bill ? </label>
      <select value={whoIsPaying}   onChange={(e) => setWhoIsPaying(e.target.value)}> 
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>

      <Button> Split Bill </Button>
    </form>
  );
}
