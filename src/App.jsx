
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import Auth from './Pages/Auth/Auth'


function App() {
  

  return (
    <>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/auth' element={<Auth/>}/>
   </Routes>
   </>
  )
}

export default App
