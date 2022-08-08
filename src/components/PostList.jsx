import React from 'react'
import Post from './Post.jsx'

const PostList = ({users}) => {
  return (
    <div>
      <h2>PostList</h2>
        {users.map((post, i) => 
            <Post key={i} {...post}/>
          )}
    </div>
  )
}

export default PostList;