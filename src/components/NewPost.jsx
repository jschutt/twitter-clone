import React from 'react'
import { useState } from 'react'

const NewPost = () => {

    const {postText, setPostText} = useState("");

    const handleOnChange = (e) => {
        const post = e.target.value;
        setPostText(post)
    }

  return (
    <div>
        <textarea name="postText" id="postText" cols="30" rows="10" ></textarea>
        <button>Tweet</button>
    </div>
  )
}

export default NewPost