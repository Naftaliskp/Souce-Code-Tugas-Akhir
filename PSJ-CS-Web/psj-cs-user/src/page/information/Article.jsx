import React, {useState, useEffect} from 'react'
import ArticleSection from '../../components/ArticleSection'
import Loading from '../../components/loader/Loading'

function Article() {
  const [ isLoading, setIsLoading ] = useState(true);

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
            <ArticleSection/>
          </>
        ) }
    </>
  )
}
export default Article
