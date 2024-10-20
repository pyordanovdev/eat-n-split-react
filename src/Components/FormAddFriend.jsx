import Button from "./Button";
import { useState } from "react";
import randomIntFromInterval from "../utils/randomNumberGenerator";

function FormAddFriend({ setShowFriendForm, setFriendsList }) {
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState(
    `https://avatar.iran.liara.run/public/${randomIntFromInterval(1, 10)}`
  );

  function handleAddFriend(e) {
    e.preventDefault();
    if (friendName === "") return alert("Please fill Friend's Name");
    else if (friendImage === "") return alert("Please fill Friend's Image");

    const newFriend = {
      id: crypto.randomUUID(),
      name: friendName,
      image: friendImage,
      balance: 0,
    };
    setShowFriendForm((prev) => !prev);

    setFriendName("");
    setFriendImage(
      `https://avatar.iran.liara.run/public/${randomIntFromInterval(1, 10)}`
    );

    setFriendsList((prev) => [...prev, newFriend]);
  }
  return (
    <form className='form-add-friend' onSubmit={handleAddFriend}>
      <label>🧑Name</label>
      <input
        type='text'
        placeholder="Friend's Name"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />

      <label>📸Image</label>
      <input
        type='text'
        value={friendImage}
        placeholder="Friend's Image"
        onChange={(e) => setFriendImage(e.target.value)}
      />
      <Button>Add Friend</Button>
    </form>
  );
}

export default FormAddFriend;
