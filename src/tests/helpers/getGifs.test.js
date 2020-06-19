const { getGifs } = require("../../helpers/getGifs");



describe('Pruebas con getGifs Fetch', () => {

    test('debe de traer 5 elementos', async () => {
        const gifs = await getGifs('Goku');

        expect(gifs.length).toBe(5);
    })

    test('debe de traer 5 elementos', async () => {
        const gifs = await getGifs('');

        // console.log(gifs);


        expect(gifs.length).toBe(0);
    })

})
