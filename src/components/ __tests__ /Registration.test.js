import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Registraion from '../../pages/registraion'
const component = shallow(<Registraion />);
//describe what we are testing
describe('Registration Component', () => {
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
        expect(component.find('#registrationinput').exists()).toBe(true);
    });
})
