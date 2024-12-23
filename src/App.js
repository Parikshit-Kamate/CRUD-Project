import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Pages/Home.jsx'
import Admin from './Components/Pages/Admin.jsx'
import About from './Components/Pages/About.jsx'
import Career from './Components/Pages/Career.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Components/Pages/Register.jsx';
import StudentData from './Components/Pages/StudentData.jsx'
import Update from './Components/Pages/Update.jsx';
import Footer from './Components/Footer/Footer.jsx'
import Delete from './Components/Pages/Delete.jsx';
import StudentLogin from './Components/Pages/StudentLogin.jsx';
import StudentDetails from './Components/Pages/StudentDetails.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/home' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/studentdata' element={<StudentData />} />
          <Route path='/update/:studentID' element={<Update />} />
          <Route path='/delete/:studentID' element={<Delete />} />
          <Route path='/studentlogin' element={<StudentLogin />} />
          <Route path='/studentlogin' element={<StudentDetails />} />

          <Route path='/career' element={<Career />} />

        </Routes>




      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
