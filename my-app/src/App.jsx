import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IntroScreen from './components/IntroScreen'
import LoginScreen from './components/LoginScreen'
import CreateAccountScreen from './components/CreateAccount'
import AccountSettings from './components/AccountSettings'
// Temporary dummy component for redirect


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/create-account" element={<CreateAccountScreen />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
