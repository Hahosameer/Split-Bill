import React, { useState } from 'react';


const AddFriend = ({friends , setFriends}) => {


  const[friendName,setFriendName] = useState("")
  const[friendImg,setFriendImg] = useState("")

  const addFriendHandler = () => {
    const newFriends = [...friends]
    newFriends.push({
      name:friendName,
      imgSrc:friendImg,
      amount:-59,
    })
    setFriends(newFriends);
  }

  return (
    <div className='inputBox'>
    <div className='inputValue'>
      <label htmlFor="friendName">🧑‍🤝‍🧑 Friend name</label>
      <input 
      type="text" 
      name="friendName"
      onChange={(e) => setFriendName(e.target.value)}/>
    </div>
    <div className='inputValue'>
      <label htmlFor="friendImg">📹 Image URL</label>
      <input 
      type="text" 
      name="friendName"
      onChange={(e) => setFriendImg(e.target.value)} />
    </div>
    <div className='addBtn'>
      <button 
      onClick={addFriendHandler}>Add</button>
    </div>
    
  </div>
  );
};

export default AddFriend;
