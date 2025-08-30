import './App.scss'
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard'
import { Routes, Route } from 'react-router'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/login" element={<App />} />
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
   )
}

export default App
