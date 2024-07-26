import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import BannerFeature from '../../components/BannerFeature'
import Loading from '../../components/loader/Loading'
import SectionInformation from '../../components/SectionInformation'
// import Login from '../authenticate/Login'
// import useToken from './useToken';


function Homepage() {
  const [ isLoading, setIsLoading ] = useState(true);
  // const [ token, setToken ] = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  useEffect( () => {
    window.scrollTo(0, 0);
      setTimeout( () => {
        setIsLoading(false);
      }, 1500 )
  }, [] )
  return (
    <>
        { isLoading ? (
          <Loading/>
        ): (
          <>
            <BannerFeature/>
            <SectionInformation/>
          </>
        ) }
    </>
  )
}
export default Homepage