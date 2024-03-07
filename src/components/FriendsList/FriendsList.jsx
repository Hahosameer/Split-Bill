import React from "react";
import { Friend } from "../Friend/Friend";
// import Friend from "../Friend/Friend";
// import Friend from "../AddFriend/AddFriend";

const FriendsList = ({
  friends,
  setFriends,
  setUserIndex,
  setBillUi,
  showBillUi,
}) => {
  console.log(friends);
  return (
    <div className="FriendsList">
      {friends?.map((friend, index) => {
        return (
          <Friend
            key={index}
            indexNumber={index}
            friend={friend}
            setFriends={setFriends}
            setUserIndex={setUserIndex}
            showBillUi={showBillUi}
            setBillUi={setBillUi}
          />
        );
      })}
    </div>
  );
};

export default FriendsList;
