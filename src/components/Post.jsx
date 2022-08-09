import React from 'react'
import { useSelector } from 'react-redux';

const Post = () => {

  const posts = useSelector((state) => state.profile.posts);
  console.log(posts)
  const {profileName, profileTag, profileImg} = useSelector((state) => state.profile)

  return (
    <div>
        {posts.map((post, i) => (
          <div key={i}>
            <p>{profileName} @{profileTag}</p>
            <p>{post.postDate}</p>
            <p>{post.postBody}</p>
          </div>
        ))}
    </div>
  )
}

export default Post