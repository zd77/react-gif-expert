import { render, screen, fireEvent } from '@testing-library/react'
import { AddCategory } from '../../components/AddCategory'

describe('Tests on <AddCategory />', () => { 
    test('should change the input value', () => { 
        render( <AddCategory onNewCategory={ () => {} }/>)
        const input = screen.getByRole('textbox')
        fireEvent.input( input, { target: { value: 'Something' } } )
        expect( input.value ).toBe('Something')
     })

     test('should invoke onNewCategory if the input has a value', () => { 
        const inputValue = 'Something'
        const onNewCategory = jest.fn()
        render( <AddCategory onNewCategory={ onNewCategory }/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input( input, { target: { value: inputValue } } )
        fireEvent.submit( form )
        expect( input.value ).toBe('')
        expect( onNewCategory ).toHaveBeenCalled()
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 )
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue )
      })

      test('should not invoke onNewCategory if the input value is empty', () => { 
        const onNewCategory = jest.fn()
        render( <AddCategory onNewCategory={ onNewCategory }/>)
        const form = screen.getByRole('form')
        fireEvent.submit( form )
        expect( onNewCategory ).toHaveBeenCalledTimes( 0 )
       })
 })