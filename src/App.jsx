import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar'
import ItemViewer from './components/itemViever/ItemViewer'
import CharacterViever from './components/characterViever/CharacterViever'
import LoginModal from './components/LoginModal'
import CharacterNavBar from './components/CharacterNavBar'



export default function App() {
  const [currentPage, setCurrentPage] = useState('index')
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
      // Vérifier la présence d'un jeton dans le localStorage
      const token = localStorage.getItem('access_token');
      if (token) {
          setIsAuthenticated(true);
      }
  }, []);
  
  return (
    <>
      <div className="div-navbar">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
      {isAuthenticated && <CharacterNavBar />}

      <div className= "app_div">
      <BrowserRouter>
        <Routes>
            <Route path="/encyclopedie" element={<ItemViewer />} />
            <Route path="/personnages/:id?" element={<CharacterViever />} />
        </Routes>
      </BrowserRouter>
      <LoginModal />

      </div>
    </>
  )
}
