import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import ApplyNow from './Components/ApplyNow';
import RequestInfo from './Components/RequestInfo';
import RequestSubmitpage from './Components/RequetSubmitpage';
import Bachelors from './Components/Bachelor';

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
      </Routes>
      </Router>
  );
}

export default App;
