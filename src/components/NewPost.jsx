import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';

const NewPost = () => {

  const {profileName, profileTag, profileImg} = useSelector((state) => state.profile);

    const {postText, setPostText} = useState("");

    const handleOnChange = (e) => {
        const post = e.target.value;
        setPostText(post)
    }

  return (
    <div>
      <img src={profileImg} alt="profile image" />
        <p>{profileName}</p>
        <textarea name="postText" id="postText" cols="30" rows="10" ></textarea>
        <button>Tweet</button>
    </div>
    
  )
}

export default NewPost