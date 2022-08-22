import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"
jest.mock("../../hooks/useFetchGifs")

describe('Tests on <GifGrid />', () => { 
    const category = 'Naruto'
    test('should show loading when initializing', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render( <GifGrid category={ category }/> )
        expect( screen.getByText( category ) )
        expect( screen.getByText( 'Cargando...' ) )
     })
     test('should show items when the imgs are loaded through useFetchGifs', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'Naruto',
                url: 'http://localhost/naruto.jpg'
            },
            {
                id: 'DEF',
                title: 'SamuraiX',
                url: 'http://localhost/samuraix.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render( <GifGrid category={ category }/> )
        expect( screen.getAllByRole('img').length ).toBe( 2 )
        expect( screen.getAllByRole('img').length ).toBeGreaterThan( 0 )
     })
 })