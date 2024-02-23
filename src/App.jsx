import { useState } from 'react'
import Header from './components/Header'
import CalculadoraBase from './components/CalculadoraBase'
import HistorialResultados from './components/HistorialResultados'


function App() {


  return (
    <div className="container mx-auto mt-8">
      <Header/>
      <div className='mt-10'>
        <CalculadoraBase/>
        <HistorialResultados/>
      </div>
    </div>
  )
}

export default App
