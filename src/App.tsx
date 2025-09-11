import './App.scss'
import Layout from './components/Layout/Layout'
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard'
import { Routes, Route } from 'react-router'

function App() {
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
         </Routes>
      </Layout>
   )
}

export default App
