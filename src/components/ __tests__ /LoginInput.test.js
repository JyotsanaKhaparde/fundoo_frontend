import React from 'react';
import { shallow } from 'enzyme';
import LoginInput from '../../components/logininput'
describe('LoginInput component', () => {
    it('renders a email input', () => {
        expect(shallow(<LoginInput />).find("#username").length).toEqual(1);
    });
    it('renders a password input', () => {
        expect(shallow(<LoginInput />).find('#password').length).toEqual(0);
    });
})

