import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './Components/components/Banner';
import Services from './Components/components/Services';
import Events from './Components/components/Events';
import Faq from './Components/components/Faq';
import Footer from './Components/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import Navbar from './Components/NavBar';
import RegistrationComponent from './Components/Pages/Register/RegistrationComponent';
import Login from './Components/Pages/Login/login';
import Product from './Components/Pages/Products/Products';
import CalorieCounter from './Components/Pages/CalorieCounter/calorieCounter'
import Doctors from './Components/Pages/Doctors/doctors'
import PrescriptionTracker from './Components/Pages/PrescriptionTracker';
import Routinetracker from './Components/Pages/Routinetracker';
import DiseaseAware from "./Components/DiseaseAware";



function App() {
  return (
    <>
      <Router>

        <Navbar/>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Services />
                <Events />
                <Faq />
              </>
            }

            
        />
        
          <Route path="/register" element={<RegistrationComponent />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/medicines" element={<Product />} />
          <Route path="/calorie-counter" element={<CalorieCounter />} />
          <Route path='/appointment' element={<Doctors/>} />
          <Route path='/tracker' element={<PrescriptionTracker />} />
          <Route path='/Routinetracker' element={<Routinetracker />} />
          <Route path='/diseaseAware' element={<DiseaseAware/>} />
        </Routes>

        <Footer />
        
      </Router>
    </>
  );
}

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Register from './Components/Pages/Register/RegistrationComponent'
// import Login from './Components/Pages/Login/login'
// import Product from './Components/Pages/Products/Products'
// import Doctors from './Components/Pages/Doctors/doctors'
// import Hospitals from './Components/Pages/Hospital/hospital'
// import CalorieCounter from './Components/Pages/CalorieCounter/calorieCounter'
// import Navbar from './Components/NavBar'

// import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
// import Banner from './Components/components/Banner'
// import Services from './Components/components/Services'
// import Events from './Components/components/Events'
// import Faq from './Components/components/Faq'
// import Footer from './Components/components/Footer'

// function App() {

//   return (
//     <>
//      {/* <Register/>
//      {/* <Login/> */}
//      {/* <Product/> */}
//      {/* <Doctors/> */}
//      {/* <Hospitals/> */}
//      {/* <CalorieCounter/> */}
//      {/* <Navbar/> */}


// {/* <Banner/> */}

//      <Router>
//       <Navbar />
//       <Routes>
        
//       <Route path="/" element={<Banner />
//       <Services />
//       <Events />
//       <Faq />
//       <Footer />} />
//           <Route path="/book-appointment" element={<BookAppointment />} />
//           <Route path="/buy-medicines" element={ <BuyMedicines /> } />
//           <Route path="/calorie-counter" element={ <CalorieCounter /> } />
//           <Route path="/prescription-tracker" element={ <PrescriptionTracker /> } />
//           <Route path="/wellness" element={ <Wellness /> } />
//           <Route path="/routine-tracker" element={ <RoutineTracker /> } />
//         </Routes>
//     </Router>
     
//     </>
//   )
// }

// export default App

// // ac68cc5db8a368aa3eaa0f84b2f074a2
