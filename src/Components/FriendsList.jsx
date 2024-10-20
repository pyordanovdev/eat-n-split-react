import Friend from "./Friend";
function FriendsList({ friendsList, selectedFriend, setSelectedFriend }) {
  return (
    <ul>
      {friendsList &&
        friendsList.length > 0 &&
        friendsList.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
          />
        ))}
    </ul>
  );
}

export default FriendsList;
