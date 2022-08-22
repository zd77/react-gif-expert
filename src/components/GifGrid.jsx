import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category )

    return (
        <Fragment>
            <h3>{ category }</h3>
            {
                isLoading
                ? <h2>Cargando...</h2>
                : null
            }
            <div className='card-grid' >
                {
                    images.map( image => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
            </div>
        </Fragment>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}