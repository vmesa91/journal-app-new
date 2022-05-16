import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
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
