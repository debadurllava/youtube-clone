import React, { useEffect , useState} from 'react'
import './_comments.scss'
import Comment from '../comment/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../redux/actions/comments.action'
function Comments({videoId, totalComments}) {

  const dispatch = useDispatch()

  useEffect (() =>{
    dispatch(getCommentsOfVideoById(videoId))
  }, [videoId, dispatch])

  const comments = useSelector(state => state.commmentList)
  console.log('comments----',comments)

  const [text, setText] = useState('')
  const _comments = comments?.map(comment => comment.snippet.topLevelComment.snippet)

console.log('__comments____',_comments)
  const handleComment = (e) =>{
    e.preventDefault();
    if(text.length===0) return
dispatch(addComment(videoId,text))
setText('')
  }
  return (
    <div className='comments'>
      <p>{totalComments}</p>
      <div className='comments_form d-flex w-100 my-2'>
      <img
        src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
        alt='avater'
        className='rounded-circle mr-3 '
     />
     <form onSubmit={handleComment} className='d-flex flex-grow-1'>
      <input
        type='text'
        className='flex-grow-1'
        placeholder='Write a comment.....'
        value={text}
        onChange={e=> setText(e.target.value)}
      />
      <button className='border-0 p-2'>Comment</button>
     </form>
      </div>
      <div className='comments__list'>
      {
        _comments?.map((comment, index) =>(
          <Comment comment={comment} key={index} />
        ))
      }
       
      </div>
    </div>
  )
}

export default Comments
