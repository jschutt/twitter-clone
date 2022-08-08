import React from 'react'
import {Link} from 'react-router-dom'

const SiteHeader = () => {
  return (
    <div>
        <Link to="/"><button>Home</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
    </div>
  )
}

export default SiteHeader