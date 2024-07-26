import React, { useEffect, useState  } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Login from './page/authenticate/Login'
import Homepage from './page/homepage/Homepage'
import Article from './page/information/Article'
import Footer from './components/Footer'
import Pengaduan from './page/pengaduan/Pengaduanpage'
import CekData from './page/homepage/CekDataPage'
import Navigation from './components/Navigation'
import { useSelector, useDispatch } from 'react-redux'
import { getSession } from './redux/action/userSession'
import { getCookie } from './cookie/cookie'
import Loading from './components/loader/Loading'
import useToken from './useToken';


function App() {
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(true);

  const [ isLoading, setIsLoading ] = useState(true);

  const { token, setToken } = useToken();

  console.log("app "+token)

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <>
    { false ? (
      <Loading/>
    ) : (
    <div className="App">
        <Navigation/>
          <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/FormPengaduan' element={<Pengaduan/>} />
              <Route path='/article' element={<Article/>} />
              <Route path='/cekdata' element={<CekData/>} />
          </Routes>
          <Footer/>
    </div>
  )
}
</>
  )

}

export default App
