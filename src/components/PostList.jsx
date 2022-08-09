import React from 'react'
import Post from './Post.jsx'
import { useSelector } from 'react-redux'

const PostList = () => {

  const posts = useSelector((state) => state.profile.posts)

  return (
    <div>
      <h2>PostList</h2>
        {posts.map((i) => 
            <Post key={i} />
          )}
    </div>
  )
}

export default PostList;