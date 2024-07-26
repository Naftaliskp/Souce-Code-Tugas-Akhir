import React, { useEffect, useState  } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Login from './page/authenticate/Login'
import User from './page/user/Userpage'
import Penghuni from './page/penghuni/Penghunipage'
import Informasi from './page/informasi/Informasipage'
import Article from './page/information/Article'
import Keluhan from './page/keluhan/keluhanpage'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import { useSelector, useDispatch } from 'react-redux'
import { getSession } from './redux/action/userSession'
import { getCookie } from './cookie/cookie'
import Loading from './components/loader/Loading'
import useToken from './useToken';

function App() {
  // const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  // const [token, setToken] = useState(null);
  const { token, setToken } = useToken();

  console.log("app "+token)

  if(!token) {
    return <Login setToken={setToken} />
  }

// useEffect( () => {
//   const token = getCookie('token');
//   if(!token) {
//     dispatch(getSession(token, setIsLoading));
//   } else {
//     setIsLoading(false);
//   }
// },[] )

  return (
    <>
    { false ? (
      <Loading/>
    ) : (
    <div className="App">
        <Navigation/>
          <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/penghuni' element={<Penghuni/>} />
              <Route path='/informasi' element={<Informasi/>}/>
              <Route path='/keluhan' element={<Keluhan/>}/>
              <Route path='/user' element={<User/>} />
              <Route path='/article' element={<Article/>} />
          </Routes>
          <Footer/>
    </div>
  )
}
</>
  )

}

export default App
