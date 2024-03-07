import React, { useState } from "react";

export const Split = ({ friends, setFriends, userIndex, setBillUi }) => {
  const newFriend = [...friends];

  const [yourExpense, setYourExpense] = useState(0);
  const [freindExpense, setFriendExpense] = useState(0);
  const [billPayer, setBillPayer] = useState();
  const [splitBox, setSplitBox] = useState(true);

  const splitBillHandler = () => {
    let splitFriendUser = newFriend[userIndex];
    let count = yourExpense - freindExpense;
    if (billPayer !== "You") {
      splitFriendUser.amount = yourExpense * 1;
    } else {
      splitFriendUser.amount = -freindExpense * 1;
    }
    setFriends(newFriend);
    // Toggle split box visibility
    setSplitBox((prevSplitBox) => !prevSplitBox);
  };

  return (
    <>
      {splitBox && (
        <div className="splitMain">
          <h1>Split a Bill With {newFriend[userIndex].name}</h1>
          <div className="itemValue">
            <label htmlFor="bill">💵 Bill Value</label>
            <input type="number" name="bill" className="w-32 h-8" />
          </div>
          <div className="itemValue">
            <label htmlFor="yourExpense">🧍 Your expense</label>
            <input
              type="number"
              name="yourExpense"
              onChange={(e) => setYourExpense(e.target.value)}
            />
          </div>
          <div className="itemValue">
            <label htmlFor="frndExpense">
              🧑‍🤝‍🧑 {`${newFriend[userIndex].name}'s`} expense
            </label>
            <input
              type="number"
              name="frndExpense"
              onChange={(e) => setFriendExpense(e.target.value)}
            />
          </div>
          <div className="itemValue">
            <label htmlFor="billPayer">🤑 Who is paying this bill?</label>
            <select
              className="dropDown"
              name="billPayer"
              onChange={(e) => setBillPayer(e.target.value)}
            >
              <option value="you">You</option>
              <option value="name">{newFriend[userIndex].name}</option>
            </select>
          </div>
          <div className="splitBtn">
            <button onClick={splitBillHandler}>Split bill</button>
          </div>
        </div>
      )}
    </>
  );
};
