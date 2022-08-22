import { render, screen } from '@testing-library/react'
import { GifItem } from '../../components/GifItem'

describe('Tests on <GifItem />', () => {
    const title = 'Title'
    const url = 'http://localhost/Url'
    test('should match with the snapshot', () => { 
        const { container } = render( <GifItem title={ title } url={ url }/> )
        expect( container ).toMatchSnapshot();
     })

     test('should show the img with the indicated URL $ ALT', () => { 
        render( <GifItem title={ title } url={ url }/> )
        // screen.debug()
        // expect( screen.getByRole('img').src ).toBe( url )
        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( title )
      })

      test('should show the title in the component <p></p>', () => { 
        render( <GifItem title={ title } url={ url }/> )
        expect( screen.getByText( title) ).toBeTruthy()
       })
})