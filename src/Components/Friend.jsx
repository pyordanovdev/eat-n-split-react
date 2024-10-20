import Button from "./Button";
function Friend({ friend, selectedFriend, setSelectedFriend }) {
  function handleSelection() {
    setSelectedFriend((prev) => (prev === friend ? null : friend));
  }
  return (
    <li className={friend.id === selectedFriend?.id ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className='red'>
          You owe {friend.name} ${friend.balance}
        </p>
      )}
      {friend.balance < 0 && (
        <p className='green'>
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={handleSelection}>
        {selectedFriend === friend ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
