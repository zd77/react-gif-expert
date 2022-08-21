import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setInputValue ] = useState('')
    const onInputChanged = ( event ) => {
        setInputValue( event.target.value )
    }
    const onSubmit = ( event ) => {
        event.preventDefault()
        if( inputValue.trim().length <= 1 ) return
        onNewCategory( inputValue.trim() )
        // setCategories(( categories ) => [ ...categories, inputValue ])
        setInputValue('')
    }
    return (
        <form onSubmit={ onSubmit } >
            <input 
                type='text'
                placeholder='Search for GIFs'
                value={ inputValue }
                onChange={ onInputChanged }
            />
        </form>
    )
}
