import { useState } from "react";
import "./App.css";
import AddFriend from "./components/AddFriend/AddFriend";
import { Split } from "./components/Split/Split";
import FriendsList from "./components/FriendsList/FriendsList";


function App() {
  const friendArr = [
    // {
    //   name: "sameer",
    //   imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbLonevQIqBWh2Yh2C1BACaaoMhoJIKHedg&usqp=CAU",
    //   amount : 2
    // },
    // {
    //   name: "sameer",
    //   imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbLonevQIqBWh2Yh2C1BACaaoMhoJIKHedg&usqp=CAU",
    //   amount : 2
    // },
    // {
    //   name: "sameer",
    //   imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbLonevQIqBWh2Yh2C1BACaaoMhoJIKHedg&usqp=CAU",
    //   amount : 2
    // },
  ];
  const [friends, setFriends] = useState(friendArr);
  const [userIndex, setUserIndex] = useState(0);
  const [showAddFriendUi, setShowAddFriendUi] = useState(false);
  const [showSplitBillUi, setShowSplitBillUi] = useState(false);

  return (
    <>
      <div className="container">
        <div className="leftComponent">
          <FriendsList
            friends={friends}
            setFriends={setFriends}
            setUserIndex={setUserIndex}
            showBillUi={showSplitBillUi}
            setBillUi={setShowSplitBillUi}
          />

          {showAddFriendUi && (
            <AddFriend friends={friends} setFriends={setFriends} />
          )}

          <button
            className="addFriendBtn"
            onClick={() => setShowAddFriendUi(!showAddFriendUi)}
          >
            {showAddFriendUi ? "Close" : "Add Friend"}
          </button>
        </div>
        <div className="rightComponent">
          {showSplitBillUi && (
            <Split
              friends={friends}
              setFriends={setFriends}
              userIndex={userIndex}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
