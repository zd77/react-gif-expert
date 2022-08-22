import React from 'react'
import PropTypes from 'prop-types'

export const GifItem = ({ title, url }) => {
    return (
        <div className='card' >
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
// Validando existencia y tipo de las propiedas necesarias
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}