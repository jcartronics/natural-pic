import React from 'react'
import { Heart } from './Heart'

export const Foto = ({ foto, darLike }) => {
  return (
    <div className='foto' style={{backgroundImage: `url(${foto.src.medium})`}} onClick={() => darLike(foto)}>
        <Heart filled={foto.liked} />
        {foto.alt}
    </div>
  )
}
