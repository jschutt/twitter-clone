import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';

const NewPost = () => {

  const profile = useSelector((state) => state.profile);

    const {postText, setPostText} = useState("");

    const handleOnChange = (e) => {
        const post = e.target.value;
        setPostText(post)
    }

    console.log(profile.profileName)

  return (
    <div>
        <p>{profile.profileName}</p>
        <textarea name="postText" id="postText" cols="30" rows="10" ></textarea>
        <button>Tweet</button>
    </div>
    
  )
}

export default NewPost