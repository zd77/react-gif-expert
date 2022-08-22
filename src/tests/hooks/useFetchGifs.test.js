import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Test on customHook useFetchGifs', () => { 
    test('should return the initial state', () => { 
        const { result } = renderHook( () => useFetchGifs('Naruto') )
        const { images, isLoading } = result.current
        expect( images.length ).toBe( 0 )
        expect( isLoading ).toBeTruthy()
     })
     test('should return an array of imgs & isLoading value in false', async () => { 
        const { result } = renderHook( () => useFetchGifs('Naruto') )
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 )
        )
        const { images, isLoading } = result.current
        expect( images.length ).toBeGreaterThan( 0 )
        // expect( isLoading ).not.toBeTruthy()
        expect( isLoading ).toBeFalsy()
      })
 })