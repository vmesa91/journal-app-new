import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
  return (
    <div className='notes__main-content'>

        <NotesAppBar/>
      <div className='notes__content'>
          <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'/>

          <textarea
            placeholder='What happened today?'
            className='notes__textarea'>
          </textarea>

          <div className='notes__images'>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' alt='imagen'/>
          </div>
      
      </div>

  </div>
  )
}

export default NoteScreen