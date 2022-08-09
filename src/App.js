import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Home from './routes/Home/Home.jsx'
import Profile from './routes/Profile/Profile.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import { getProfile } from './redux/profileSlice';

function App() {

  const profile = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!profile.profileName){
      dispatch(getProfile())
    }
  }, [])

  const posts = [
    {
      userName: "Navih",
      userTag: "navih123",
      postDate: "11/11/2009",
      postText: "Hello world!"
    },
    {
      userName: "Robotic",
      userTag: "robotic",
      postDate: "12/12/2010",
      postText: "Hello?"
    },
  ]



  return (
    <div className="App">
      <header className="App-header">
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Home users={posts} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
