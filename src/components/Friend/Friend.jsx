import React, { useState } from 'react';

export const Friend = ({ indexNumber, friend, setFriends, setUserIndex, showBillUI, setBillUi }) => {
    const [selectFriend, setSelectFriend] = useState(false);

    const handleButtonClick = () => {
        setUserIndex(indexNumber);
        setSelectFriend(!selectFriend);
        setBillUi(!selectFriend); // Show/hide the bill UI based on the selection state
    };

    return (
        <div className='card'>
            <div className='image'>
                <img src={friend.imgSrc} alt={friend.name} />
            </div>
            <div className='userName'>
                <h3>{friend.name}</h3>
                <p
                    style={{
                        color: friend.amount > 0 ? "red" : friend.amount < 0 ? "#25d366" : "black"
                    }}
                >
                    {friend.amount > 0 ? `You owe ${friend.amount}$` : friend.amount === 0 ? `You and ${friend.name} are even` : `${friend.name} owes you ${Math.abs(friend.amount)}$`}
                </p>
            </div>
            <div>
                <button
                    disabled={showBillUI} // Disable the button if the bill UI is already shown
                    className='selectBtbn'
                    onClick={handleButtonClick}
                >
                    {!selectFriend ? "Select" : "Close"}
                </button>
            </div>
        </div>
    );
}
