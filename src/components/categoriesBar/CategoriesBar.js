import React, { useState } from 'react'
import './_categoriesBar.scss'
import { useDispatch } from 'react-redux'
import { getPopularVideo, getVideoByCategory } from '../../redux/actions/video.action';
const keywords = [
  "All",
  "React Js",
  "Angular Js",
  "React Native",
  'use of API',
  "Redux",
  'Music',
  "Algorithm Art",
  "Trading",
  "Stock",
  'Cricket',
  'BB ki Vines',
  'Football',
  'Coding',
  'Placement',
  'Job',
  'TCS',
  'Infosys'
]

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState('All');
  
  const dispatch = useDispatch();
  
  const handleClick = value =>{
    setActiveElement(value)
    if(value === 'All'){
      dispatch(getPopularVideo())
    }else{
    dispatch(getVideoByCategory(value))
    }
  }


  return (
    <div className='CategoriesBar'>
      {
        keywords.map((value, index) =>(
          <span onClick={() => handleClick(value)}
          key={index}
          className={activeElement === value ? 'active' : ''}>
            {value}
          </span>
        ))
      }
    </div>
  )
}

export default CategoriesBar
