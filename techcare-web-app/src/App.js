import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from "./context/AuthContext";

import SignUp from './components/SignUp/SignUp';
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute";
import Connections from "./components/Connections/Connections";
import FallRecords from "./components/FallRecords/FallRecords";
import Profile from "./components/Profile/Profile";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>

  );
}

export default App;
