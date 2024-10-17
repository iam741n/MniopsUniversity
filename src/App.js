import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import ApplyNow from './Components/ApplyNow';
import RequestInfo from './Components/RequestInfo';
import RequestSubmitpage from './Components/RequetSubmitpage';
import Bachelors from './Components/Bachelor';
import StudentExperience from './Components/StudentExperience';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import TutionFree from './Components/TutionFree';
import BecomeStudent from './Components/BecomeStudent';
import Master from './Components/Master';
import AdminDashboard from './Components/AdminDashboard';
import ContactRequest from './Components/ContactRequest';
import RequestInfoadmin from './Components/RequestInfoadmin';
import AdminLogin from './Components/AdminLogin';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ApplyNow" element={<ApplyNow />} />
      <Route path="/RequestInfo" element={<RequestInfo />} />
      <Route path="/RequestSubmitpage" element={<RequestSubmitpage />} />
      <Route path="/Bachelor" element={<Bachelors />} />
      <Route path="/StudentExperience" element={<StudentExperience />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/TutionFree" element={<TutionFree />} />
      <Route path="/BecomeStudent" element={<BecomeStudent />} />
      <Route path="/Master" element={<Master />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />
      <Route path="/ContactRequest" element={<ContactRequest />} />
      <Route path="/RequestInfoadmin" element={<RequestInfoadmin />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      

      </Routes>
      </Router>
  );
}

export default App;
