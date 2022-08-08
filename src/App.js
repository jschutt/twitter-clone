import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Profile from './routes/Profile/Profile.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      setData(data)
    })
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
          <Route exact path="/" element={<Home users={data} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
