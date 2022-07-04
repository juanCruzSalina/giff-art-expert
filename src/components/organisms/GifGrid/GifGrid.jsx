import React, { useEffect, useState } from 'react'
import './GifGrid.css'
import { getGifs } from '../../../helpers/getGifs'

import Heading from '../../atoms/Heading/Heading'
import GifItem from '../../molecules/GifItem/GifItem'

const GifGrid = ({ category }) => {

  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs(category)
      .then( imgs => setGifs(imgs) )
  }, [])

  return (
    <div className={'grid__main'}>
      <div className={'grid__title'}>
        <Heading size={'subtitle'}>
          {category}
        </Heading>
      </div>
      <div className={'grid__item'}>
        {gifs.map(gif =>
          <GifItem key={gif.id} {...gif}/>
        )}
      </div>
    </div>
  )
}

export default GifGrid