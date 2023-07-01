import React, { useContext } from 'react'
import "../assets/css/galeria.css"
import { MyContext } from '../context/MyContext'

export const Favoritos = () => {

  const { fotos } = useContext(MyContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {fotos?.filter((foto) => foto.liked).map((foto) => {
          return (
              <img key={foto.id} src={foto.src.tiny} alt={foto.alt} />
          )
        })}
      </div>
    </div>
  )
}
