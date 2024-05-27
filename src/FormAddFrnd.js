import { useState } from "react";
import Button from "./Button";

export default function FormAddFrnd({ onSetFriends, friends }) {
  const [name, setName] = useState("");
  const [image, setImg] = useState("/profile-user.png");

  function handleForm(e) {
    e.preventDefault();

    if (!name || !image) return;

    const userData = {
      id: crypto.randomUUID,
      name,
      image,
      balance: 0,
    };
    onSetFriends(userData);

    setName("");
    setImg("/profile-user.png");
    console.log(userData);
  }

  return (
    <form className="form-add-friend" onSubmit={handleForm}>
      <label> 👬 Friend name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label> 🌄 Image URL </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImg(e.target.value)}
      />

      <Button> add friend </Button>
    </form>
  );
}
