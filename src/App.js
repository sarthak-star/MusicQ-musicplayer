import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Library from './components/Library'
import Trending from './components/Trending'
import Player from './components/Player'
import Feed from './components/Feed'
import Favorites from './components/Favorites'
import Login from './components/Login'
import { setclientToken } from './spotify'

export default function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token=window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash="";
    if(!token && hash){
      const _token = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("token", _token);
    setToken(_token);
    setclientToken(_token);

    }
    else{
      setToken(token);
      setclientToken(token);
    }
    

  }, []);



  return !token ? (
    <Login />
  ) :

    (
      <Router>
        <div className="main-body">



          
    <Sidebar/>
      <Routes>
        <Route path='/Library' element={<Library/>}  ></Route>
        <Route path='/Trending' element={<Trending/>}  ></Route>
        <Route path='/Player' element={<Player/>}  ></Route>
        <Route path='/Feed' element={<Feed/>}  ></Route>
        <Route path='/Favorites' element={<Favorites/>}  ></Route>
      </Routes>
    

        </div>
      </Router>





    );
}
