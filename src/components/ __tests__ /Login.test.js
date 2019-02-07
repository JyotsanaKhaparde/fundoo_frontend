import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../pages/login';
//describe what we are testing
describe('Login Component', () => {
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
        expect(shallow(<Login />).exists()).toBe(true);
    });
})