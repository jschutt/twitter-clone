import React from 'react'
import { useSelector } from 'react-redux'
import NewPost from '../../components/NewPost.jsx'
import PostList from '../../components/PostList.jsx'

const Home = ({users}) => {

  const {profileName, profileTag, profileImg} = useSelector((state) => state.profile);

  return (
    <div style={profileName ? {display: 'block'} : {display: 'none'} }>
        <h1>Home</h1>
        <NewPost />
        <PostList users={users}/>
    </div>
  )
}

export default Home