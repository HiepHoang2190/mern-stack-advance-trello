import React from 'react'
import './App.scss'
import { Routes, Route , Navigate } from 'react-router-dom'

// custom components
import AppBar from 'components/AppBar/AppBar'
import BoardBar from 'components/BoardBar/BoardBar'
import BoardContent from 'components/BoardContent/BoardContent'
import Auth from 'components/Auth/Auth'
import AccountVerification from 'components/Auth/AccountVerification/AccountVerification'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from 'redux/user/userSlice'

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  return (
    <Routes>
      <Route path='/' element={
        !isAuthenticated
          ? <Navigate to="/signIn" />
          : <div className="trello-trungquandev-master">
            <AppBar />
            <BoardBar />
            <BoardContent />
            </div>
  
      } />

      <Route path='/signIn' element={<Auth />} />
      <Route path='/signUp' element={<Auth />} />
      <Route path='/account/verification' element={<AccountVerification />} />

      <Route path='*' element={
        <div className="not-found">
          <h3>404 not found</h3>
        </div>
      } />
    </Routes>

  )
}

export default App
