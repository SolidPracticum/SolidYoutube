import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { useDispatch } from 'react-redux'
import { fethVideo } from './redux/videoSlice'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fethVideo())
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/HomePage' element={<HomePage />} />
      </Routes>
    </div>
  )
}
export default App
