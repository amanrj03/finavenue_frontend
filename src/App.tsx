"use client"

import { useState } from "react"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="bg-gray-50 font-mona">
      {isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />}
    </div>
  )
}
