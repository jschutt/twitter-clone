import React from 'react'

const Post = (props) => {

    const {id, userId, title, body} = props;

  return (
    <div>
        <p>user{userId} @user{userId}</p>
        <p>11/11/2011</p>
        <p>{body}</p>

    </div>
  )
}

export default Post