import { useState } from 'react'
import './App.css'
import MyLayout from './components/Layout/Layout'
import MyHeader from './components/Header/Header'
import MyFooter from './components/Footer/Footer'
import MyButton from './components/Button/Button'


function App() {
  

  return (
    <>
    <MyLayout>
      <MyHeader/>
      <MyButton/>
      <MyFooter/>
    </MyLayout>
      
    </>
  )
}

export default App
