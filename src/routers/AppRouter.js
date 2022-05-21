import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

import { firebase } from "../firebase/firebase-config";
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {


  const dispatch = useDispatch() 
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setisLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) => {
      // el ? solo busca la propiedad uid, si tiene algo. Si es Null , directamente pasa
      if (user?.uid) { 
        dispatch (login(user.uid, user.displayName))
        setisLoggedIn(true)
      }else {
        setisLoggedIn(false)
      }
      setChecking(false)
    } )
  }, [dispatch, setChecking, setisLoggedIn])
  

  if (checking) 
    {
      return ( <h1>Espere ...</h1> )    
    }  
 
 return (
    <BrowserRouter>
        <Routes>
            <Route path="*" 
                element={< AuthRouter /> }
            />    
            <Route path="/" 
                element={< JournalScreen /> }
            />    
        </Routes>
    </BrowserRouter>
  )
}
