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
function App() {
  return (
    <div className='app'>
      <FriendsList friendsList={initialFriends} />
    </div>
  );
}

function FriendsList({ friendsList }) {
  return (
    <div className='sidebar'>
      <ul>
        {friendsList &&
          friendsList.length > 0 &&
          friendsList.map((friend) => (
            <Friend key={friend.id} friend={friend} />
          ))}
      </ul>
    </div>
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

function Button({ children }) {
  return <button className='button'>{children}</button>;
}

export default App;
