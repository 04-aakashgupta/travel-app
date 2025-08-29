
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Onboarding from './pages/onboarding/onboarding';
import Home from './pages/Home/Home';



import TravelDetail from './pages/TravelDetail/TravelDetail';
function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Onboarding />}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path="/travel/:id" element={<TravelDetail />} />

        </Routes>
      </Router>



    </>
  )
}

export default App
