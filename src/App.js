import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';

const App = () => {
    return (
        <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/exercise/:id" element={<ExerciseDetails/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default App
