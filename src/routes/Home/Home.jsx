import React from 'react'
import NewPost from '../../components/NewPost.jsx'
import PostList from '../../components/PostList.jsx'

const Home = ({users}) => {
  return (
    <div>
        <h1>Home</h1>
        <NewPost />
        <PostList users={users}/>
    </div>
  )
}

export default Home