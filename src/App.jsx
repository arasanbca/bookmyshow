import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Movie from './components/Movie'
import { Routes, Route } from 'react-router-dom'
import Jawan from './components/movietrailer/Jawan'
import Login from './components/Login'

import Leo from './components/movietrailer/Leo'
import Devara from './components/movietrailer/Devara'
import Salaar from './components/movietrailer/Salaar'
import Rajini from './components/movietrailer/Rajini'
import Movies from './components/Movies'

import Leo1 from './components/trailers/Leo1'
import Jawan1 from './components/trailers/Jawan1'
import Rajini1 from './components/trailers/Rajini1'
import Devara1 from './components/trailers/Devara1'
import Salaar1 from './components/trailers/Salaar1'

import KOK from './components/trailers/KOK'
import Pa from './components/trailers/Pa'
import Ad from './components/trailers/Ad'
import HS from './components/trailers/HS'
import D2 from './components/trailers/D2'
import Payment from './components/Payment'


function App() {
  return (
    <div className='App'>
     <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='/movie' element={<Movie/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/pay' element={<Payment/>} />

      
        <Route path='/leo' element={<Leo/>} />
        <Route path='/jawan' element={<Jawan/>} />
        <Route path='/jailer' element={<Rajini/>} />
        <Route path='/devara' element={<Devara/>} />
        <Route path='/salaar' element={<Salaar/>} />

        <Route path='/le' element={<Leo1/>}/>
        <Route path='/jw' element={<Jawan1/>}/>
        <Route path='/ja' element={<Rajini1/>}/>
        <Route path='/de' element={<Devara1/>}/>
        <Route path='/sa' element={<Salaar1/>}/>

        <Route path='/kok' element={<KOK/>}/>
        <Route path='/pa' element={<Pa/>}/>
        <Route path='/ad' element={<Ad/>}/>
        <Route path='/hs' element={<HS/>}/>
        <Route path='/d2' element={<D2/>}/>
      </Routes>
    </div>
  )
}

export default App
