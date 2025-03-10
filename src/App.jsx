import { useState } from 'react'
import Login from './pages/auth/Login'
import MainLayout from './layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainLayout/>
    </>
  )
}

export default App
