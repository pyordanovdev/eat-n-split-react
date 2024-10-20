import { useState } from "react";
import Button from "./Components/Button";
import FriendsList from "./Components/FriendsList";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";
import Header from "./Components/Header";

function App() {
  const [friendsList, setFriendsList] = useState([]);
  const [showFriendForm, setShowFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowFriendForm() {
    setShowFriendForm((prev) => !prev);
  }
  return (
    <>
      <Header />
      <div className='app'>
        <div className='sidebar'>
          <FriendsList
            friendsList={friendsList}
            setSelectedFriend={setSelectedFriend}
            selectedFriend={selectedFriend}
          />
          {showFriendForm && (
            <FormAddFriend
              setShowFriendForm={setShowFriendForm}
              setFriendsList={setFriendsList}
            />
          )}
          <Button onClick={handleShowFriendForm}>
            {showFriendForm ? "Close" : "Add Friend "}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            setSelectedFriend={setSelectedFriend}
            setFriendsList={setFriendsList}
            selectedFriend={selectedFriend}
          />
        )}
      </div>
    </>
  );
}

export default App;
