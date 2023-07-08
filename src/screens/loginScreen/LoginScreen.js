import React, { useEffect } from 'react'
import './_loginScreen.scss'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth.action';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const LoginScreen = () => {
    const dispatch = useDispatch();

    const accessToken = useSelector(state => state.auth.accessToken)

    const handleLogin = () =>{
        dispatch(login())
        console.log('clicked')
    }
    const history = useHistory();

    useEffect (() =>{
        if(accessToken){
            history.push('/')
        }
    },[accessToken, history])
  return (
    <div className='login'>
    <div className='login__container'>
        <img
            src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
            alt=''
        />
        <button onClick={handleLogin}> Login With google</button>
        <p>This project is using Youtube Data Api</p>
    </div>
      
    </div>
  )
}

export default LoginScreen
