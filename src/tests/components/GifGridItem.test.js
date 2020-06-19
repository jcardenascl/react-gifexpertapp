import React from 'react'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas a <GifGridItem/>', () => {

    const imgData = {
        title: 'Un titulo',
        url: 'https://localhost/algo.jpg',
    };
    let wrapper = shallow(<GifGridItem {...imgData} />);

    test('debe mostrar el <GifGridItem/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(imgData.title)
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');

        // console.log(img.props().src);
        expect(img.prop('src')).toBe(imgData.url);
        expect(img.prop('alt')).toBe(imgData.title);

    })

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');

        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    })





})
