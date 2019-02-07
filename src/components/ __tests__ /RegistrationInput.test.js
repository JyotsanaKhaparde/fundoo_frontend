import React from 'react';
//it will mock our component rendering in the DOM
import { shallow } from 'enzyme';
import RegistrationInput from '../../components/registrationinput'
describe('RegistrationInput component', () => {
    it('renders a first name input', () => {
        expect(shallow(<RegistrationInput />).find('#firstName').length).toEqual(1);
    });
    it('renders a last name input', () => {
        expect(shallow(<RegistrationInput />).find('#lastName').length).toEqual(1);
    });
    it('renders a email input', () => {
        expect(shallow(<RegistrationInput />).find('#email').length).toEqual(1);
    });
    it('renders a password input', () => {
        expect(shallow(<RegistrationInput />).find('#password').length).toEqual(1);
    });
    it('renders a confirm password input', () => {
        expect(shallow(<RegistrationInput />).find('#confirmPassword').length).toEqual(1);
    });
})
