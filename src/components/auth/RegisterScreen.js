import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <>
       <h3 className='auth__title'>Regsiter</h3>
       <form>
          <input
          type='text'
          placeholder='Name'
          name='name'
          className='auth__input'
          autoComplete='off'
          />
          <input
          type='text'
          placeholder='Surname'
          name='surname'
          className='auth__input'
          autoComplete='off'
          />
          <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
          />
          <input
          type='text'
          placeholder='Password'
          name='password'
          className='auth__input'
          />
          <input
          type='text'
          placeholder='Confirm Password'
          name='password2'
          className='auth__input'
          />

          <button className='btn btn-primary btn-block mb-5'
          type='submit'
          >Register
          </button>

          <hr/>
      

          <Link to='/auth/login' className='link'> Already registered?
          </Link>
       </form> 
    </>
  )
}