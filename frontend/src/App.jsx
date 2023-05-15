import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {

  return (
    <div className='app'>
        <Navbar />
        <div className="pages">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default App
