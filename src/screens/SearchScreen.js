import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getVideoBySearch } from '../redux/actions/video.action'
import { Container } from 'react-bootstrap'
import VideoHorizontal from '../components/videoHorizontal/VideoHorizontal'

const SearchScreen = () => {
    const {query} = useParams()
    console.log(query)

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getVideoBySearch(query))
    },[query, dispatch])

    const {videos, loading} = useSelector(state => state.searchedVideos)
  return (
   <Container>
    {
        !loading ? (
            videos?.map(video=> <VideoHorizontal video={video} key ={video.id.videoId} searchScreen/>)
        ): <h1>Loading...</h1>
    }
   </Container>
  )
}

export default SearchScreen
