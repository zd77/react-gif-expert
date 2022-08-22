import { render, screen, fireEvent } from '@testing-library/react'
import { GifExpertApp } from '../GifExpertApp'

describe('Tests on <GifExpertApp />', () => { 
    test('should match with the snapshot', () => { 
        const { container } = render( <GifExpertApp /> )
        expect( container ).toMatchSnapshot()
     })
     test('should not add a repeated category', () => { 
        const category = 'SamuraiX'
        render( <GifExpertApp /> )
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input( input, { target: { value: category }} )
        fireEvent.submit( form )
        fireEvent.input( input, { target: { value: category }} )
        fireEvent.submit( form )
        screen.debug()
        expect( screen.getAllByRole('heading', { level: 3 } ).length ).toBe( 1 )
      })
 })