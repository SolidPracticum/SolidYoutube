import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
// import Videos from './components/Videos'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/video/:id' element={<Videos />} /> */}
      </Routes>
    </div>
  )
}
export default App
