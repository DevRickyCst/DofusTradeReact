import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemViewer from './components/itemViever/ItemViewer'
import LoginModal from './components/LoginModal'

export default function App() {

  const [currentPage, setCurrentPage] = useState('index')

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div className= "app_div">
        {currentPage === 'encyclopedie' && <ItemViewer />}
      </div>
      <LoginModal />
    </>
  )
}
