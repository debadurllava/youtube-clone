import axios from 'axios';

const request  = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params:{
        key: 'AIzaSyBId3BX4GuURNv8AJa8gE6JaT4frj-WFD4'
    },
})

export default request;