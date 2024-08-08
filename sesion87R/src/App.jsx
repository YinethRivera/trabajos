import { useState } from 'react'
import '.App.css'
import RecipeCreator from './components/RecipeCreator'

const RecipeCreator=[{
  title: 'Arroz con pollo',
  description: 'poner a hervir 600 ml le agua con sal y color',
  ingredients:[
    {name: 'chiken', quanty: 300, unit: 'gr'},
    {name: 'salt', quanty: 50, unit: 'gr'},
  ]
}]

const loading = true;
const error = 

function App(){

  return
  <>
   <header></header>
   <h1>Mi recetario</h1>
   <main className='main-container'>
    <section className='flex-1'>
      <h2>Creador de recetas</h2>
      <RecipeCreator/>
    </section>

    <section className='flex-1'>
      <h2>Listado de recetas</h2>
      {Recipes.length <= 0 && 'aun no hay recetas'}

      {/*Renderizad usando operador ternario*/}
      {loading ? <p> : null }

      {
        //recipes.map
      }
    </section>
   </main>
   <flooter></flooter>
  </>
}


export default App
