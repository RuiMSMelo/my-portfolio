import { Route, Routes, Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Soundspace from './pages/projects/soundspace'
import Bananas from './pages/projects/bananas'
import Marblegame from './pages/projects/marblegame'
import Pluginflow from './pages/projects/pluginflow'
import ClothesStore from './pages/projects/clothesstore'
import Seashader from './pages/projects/seashader'

function App() {
    return (
        <Routes>
            {/* english routes: */}
            <Route path='/' element={<Navigate replace to='/en' />} />
            <Route path='/en' element={<Homepage />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/soundspace' element={<Soundspace />} />
            <Route path='/bananas' element={<Bananas />} />
            <Route path='/marblegame' element={<Marblegame />} />
            <Route path='/pluginflow' element={<Pluginflow />} />
            <Route path='/clothesstore' element={<ClothesStore />} />
            <Route path='/seashader' element={<Seashader />} />
        </Routes>
    )
}

export default App
