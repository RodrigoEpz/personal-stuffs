import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/providerMock'
import ProductMock from '../../__mocks__/productMock'
import Product from '../../components/Product'

describe('<Product>', () => {

    test('Render del componente producto', () => {
        const product = shallow(
            <ProviderMock>
                <Product></Product>
            </ProviderMock>
        )
        expect(product.length).toEqual(1)
    });

    test('Boton de comprar', () => {
        const handleAddToCart = jest.fn()

        console.log(ProductMock)
        const wrapper = mount(
            <ProviderMock>
                <Product
                product={ProductMock}
                handleAddToCart={handleAddToCart}></Product>
            </ProviderMock>
        )
        wrapper.find('button').simulate('click')

        expect(handleAddToCart).toHaveBeenCalledTimes(1)
    });

})