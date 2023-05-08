import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <div className='app'>
        <Navbar />
        <div className="pages">
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>

        </div>
    </div>
  )
}

export default App
