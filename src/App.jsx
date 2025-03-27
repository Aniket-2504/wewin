import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navabar from './navabar'
import Home from './Home'


const imagesData = [
  { src: "/thumbone.jpg" }, 
  { src: "/thumbtwo.jpg"}, 
  { src: "/thumbthree.png"}, 
  { src: "/thumbfour.jpg"}, 
  { src: "/five.jpg"}, 
  { src: "/six.jpg"}, 
  { src: "/seven.jpg"}, 
  { src: "/eight.png"}, 
  { src: "/nine.png"}, 
  { src: "/ten.png"}, 
];


function App() {
 
  return (
    <>
    <div>
    <Navabar/>
    <Home images={imagesData}/>

    </div>
    </>
  )
}

export default App
