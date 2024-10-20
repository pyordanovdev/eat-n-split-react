import Button from "./Button";
import { useState } from "react";
function FormSplitBill({ selectedFriend, setSelectedFriend, setFriendsList }) {
  const [billValue, setBillValue] = useState("");
  const [personalExpenses, setPersonalExpenses] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendsExpenses = billValue - personalExpenses;

  if (personalExpenses > billValue) {
    return alert("Personal expenses cannot exceed the bill value");
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (billValue === "") return alert("Please fill Bill Value");
    else if (personalExpenses === "")
      return alert("Please fill Personal Expenses");

    // Testing

    // Update friend balance
    if (whoIsPaying === "user") {
      setFriendsList((prev) => {
        return prev.map((friend) => {
          if (friend.id === selectedFriend.id) {
            return {
              ...friend,
              balance: friend.balance + -friendsExpenses,
            };
          }
          return friend;
        });
      });
    } else if (whoIsPaying === "friend") {
      setFriendsList((prev) => {
        return prev.map((friend) => {
          if (friend.id === selectedFriend.id) {
            return {
              ...friend,
              balance: friend.balance + personalExpenses,
            };
          }
          return friend;
        });
      });
    }

    setBillValue("");
    setPersonalExpenses("");
    setSelectedFriend(null);
  }

  return (
    <form className='form-split-bill' onSubmit={(e) => handleFormSubmit(e)}>
      <h2>Split a bill with {selectedFriend?.name}</h2>

      <label>💰Bill Value</label>
      <input
        type='number'
        placeholder='Enter bill value'
        value={billValue}
        onChange={(e) => setBillValue(+e.target.value)}
      />

      <label>🧑Personal Expensens</label>
      <input
        type='number'
        placeholder='Enter personal expenses'
        value={personalExpenses}
        onChange={(e) => setPersonalExpenses(+e.target.value)}
      />

      <label>🧑‍🤝‍🧑{selectedFriend?.name}'s Expenses</label>
      <input
        type='number'
        placeholder='Enter friend expenses'
        value={friendsExpenses}
        disabled
      />

      <label>🤑Who's paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend?.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
