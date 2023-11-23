import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import About from './pages/About'
import Contacts from './pages/Contacts'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
  )
}

export default App