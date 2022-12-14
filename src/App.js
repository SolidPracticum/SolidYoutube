
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { PrivateRoute, PublicRoute } from './redux/routes'
import Dashboard from './components/dashboard/Dashboard'
import Login_page from './pages/login-page/Login_page'
import Reset_Passwordpage from './pages/reset-passwordpage/Reset_Passwordpage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<PublicRoute Component={<HomePage />} />} />
        <Route path='/dashboard' element={<PrivateRoute Component={<Dashboard />} />} />
        <Route path='/login' element={<Login_page />} />
        <Route path='/password' element={<Reset_Passwordpage />} />
      </Routes>
    </div>
  )
}
export default App
