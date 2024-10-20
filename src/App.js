const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://avatar.iran.liara.run/public",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://avatar.iran.liara.run/public",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://avatar.iran.liara.run/public",
    balance: 0,
  },
];

function Button({ children }) {
  return <button className='button'>{children}</button>;
}
function App() {
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friendsList={initialFriends} />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList({ friendsList }) {
  return (
    <ul>
      {friendsList &&
        friendsList.length > 0 &&
        friendsList.map((friend) => <Friend key={friend.id} friend={friend} />)}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li key={friend.id}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p>You and Zoe are even</p>
      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className='form-add-friend'>
      <label>🧑Name</label>
      <input type='text' placeholder="Friend's Name" />

      <label>📸Image</label>
      <input type='text' placeholder="Friend's Image" />
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with X</h2>

      <label>💰Bill Value</label>
      <input type='text' placeholder='Enter bill value' />

      <label>🧑Personal Expensens</label>
      <input type='text' placeholder='Enter personal expenses' />

      <label>🧑‍🤝‍🧑Friend's Expenses</label>
      <input type='text' placeholder='Enter friend expenses' />

      <label>🤑Who's paying the bill?</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>Friend</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default App;
