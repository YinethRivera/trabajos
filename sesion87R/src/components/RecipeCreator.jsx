import React from 'react'

const ingredients = []

const RecipeCreator = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="">Titulo</label>
          <input type="text" placeholder='Titulo' />
        </div>

        <div>
          <label htmlFor="">Descripcion</label>
          <input type="text" placeholder='Descripcion' />
        </div>
        <hr />
        <div>
          {
            ingredients.map((ingredient, index))
            <div className='ingredient'>
              <label htmlFor="">Ingredientes</label>
              <input type="text" placeholder='Ingredientes' />
              <label htmlFor="">Cantidad</label>
              <input type="text" placeholder='Cantidad' />
              <label htmlFor="">Unidad</label>
              <input type="text" placeholder='Unidad' />

            </div>
          }
        </div>
      </form>
    </div>
  )
}

export default RecipeCreator;