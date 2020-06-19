import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGifs', () => {


    test('debe de retonar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'))
        const { data, loading } = result.current;
        // console.log(data, loading);

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);



    })

    test('debe de retornar un arreglo de imagenes y el loading en false ', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'))
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toEqual(5);
        expect(loading).toBe(false);

    })


})
