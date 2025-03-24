
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import Auth from './Pages/Auth/Auth'
import PageLayout from './Layout/PageLayout'


function App() {
  

  return (
    <>
    <PageLayout>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/auth' element={<Auth/>}/>
   </Routes>
   </PageLayout>
   </>
  )
}

export default App
