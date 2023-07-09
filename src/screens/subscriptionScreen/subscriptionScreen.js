import React, { useEffect } from 'react'
import './subscriptions.scss'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch, useSelector } from 'react-redux'
import { getVideoByChannel } from '../../redux/actions/video.action'
import { Container } from 'react-bootstrap'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'

const SubscriptionScreen = () => {


    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getVideoByChannel())
    },[dispatch])

    const {loading, videos} = useSelector(state => state.subscriptionsChannel)

  return (
    // <Container fluid>
    //     {!loading ? videos?.map(video => <VideoHorizontal video={video} key={video.id}/> ) : <h1>Loading..</h1>}
    // </Container>
    <div>
        Subscription
    </div>
  )
}

export default SubscriptionScreen
