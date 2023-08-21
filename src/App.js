import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  )
}

export default App