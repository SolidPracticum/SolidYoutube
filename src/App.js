import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { PrivateRoute, PublicRoute } from './redux/routes'
import Dashboard from './components/dashboard/Dashboard'
import LoginPage from './pages/LoginPage/LoginPage'
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<PublicRoute Component={<HomePage />} />} />
        <Route path='/dashboard' element={<PrivateRoute Component={<Dashboard />} />} />
        <Route path='/login' element={<PublicRoute Component={<LoginPage />} />} />
        <Route
          path='/reset-password'
          element={<PrivateRoute Component={<ResetPasswordPage />} />}
        />
      </Routes>
    </div>
  )
}
export default App
