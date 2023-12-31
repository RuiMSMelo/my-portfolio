import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Tesla from './pages/projects/tesla'
import Soundspace from './pages/projects/soundspace'
import Bookzone from './pages/projects/bookzone'
import Sharkattack from './pages/projects/sharkattack'
import Pluginflow from './pages/projects/pluginflow'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/tesla' element={<Tesla />} />
      <Route path='/soundspace' element={<Soundspace />} />
      <Route path='/bookzone' element={<Bookzone />} />
      <Route path='/sharkattack' element={<Sharkattack />} />
      <Route path='/pluginflow' element={<Pluginflow />} />
    </Routes>
  )
}

export default App