import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideo, getVideoByCategory } from '../../redux/actions/video.action';
import InfiniteScroll from 'react-infinite-scroll-component'
import Skeleton from 'react-loading-skeleton'
import SkeletonVideo from '../../components/skeletons/SkeletonVideo';

const HomeScreen = () => {

  const dispatch = useDispatch()

  const array = Array.from({ length: 20 }, (_, index) => index + 1);
  useEffect (() =>{
    dispatch(getPopularVideo())
  },[dispatch])

  const {videos, activeCategory,loading} = useSelector(state => state.homeVideos)
  const fetchData = () =>{
    //logi
    if(activeCategory === 'All'){
    dispatch(getPopularVideo())
    }
    else{
      dispatch(getVideoByCategory(activeCategory))
    }
  }
  return (
    <Container>
    <CategoriesBar/>
    <InfiniteScroll
    dataLength={videos.length}
    next={fetchData}
    hasMore= {true}
    loader={
      <div className='spinner-border text-danger d-block mx-auto'></div>
    }
    className='row'>
        { !loading ?  videos.map(video =>(
            <Col lg={3} md={4}>
                <Video video={video} key={video.id}/>
            </Col>
        ))
        : array.map(() =>(
          <Col lg={3} md={4}>
            <SkeletonVideo/>
          </Col>
        ))}
    </InfiniteScroll>

    </Container>
  )
}

export default HomeScreen
