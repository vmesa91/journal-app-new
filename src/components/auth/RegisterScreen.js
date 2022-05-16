import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import validator from "validator";
import { setError, removeError } from '../../actions/ui';
import { useDispatch } from 'react-redux';

export const RegisterScreen = () => {


  /* 
    {
      name: 'Virginia',
      surname: 'Mesa',
      email: 'v.mesagetafe@gmail.com',
      password: '12345',
      password: '12345'
    }
  */
  
  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
   name: 'Virginia',
   surname: 'Mesa',
   email: 'v.mesagetafe@gmail.com',
   password: '12345',
   password2: '12345'
  })
  
  const { name, surname, email, password, password2 } = formValues

  const handleRegister = (e) => {
    e.preventDefault()
    
    if (isFormValid()) {
        console.log('Fork OK')
    }
  }

  const isFormValid = () => {
      if (name.trim().length === 0) {
        dispatch(setError('Name is required'))
        return false

      } else if (!validator.isEmail(email)) {
       dispatch(setError('Email is required'))
        return false

      } else if (password !== password2 || password.length < 5) {
        dispatch(setError('Password incorrecta'))
        return false
      }
      dispatch(removeError())
      return true
  }

  return (
    <>
       <h3 className='auth__title'>Regsiter</h3>
       <form onSubmit={handleRegister}>

          <div className='auth__alert-error'> ERROR </div>
          <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          className='auth__input'
          autoComplete='off'
          onChange={ handleInputChange }
          />
          <input
          type='text'
          placeholder='Surname'
          name='surname'
          value={surname}
          className='auth__input'
          autoComplete='off'
          onChange={ handleInputChange }
          />
          <input
          type='text'
          placeholder='Email'
          name='email'
          value={email}
          className='auth__input'
          autoComplete='off'
          onChange={ handleInputChange }
          />
          <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          className='auth__input'
          onChange={ handleInputChange }
          />
          <input
          type='password'
          placeholder='Confirm Password'
          name='password2'
          value={password2}
          className='auth__input'
          onChange={ handleInputChange }
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
