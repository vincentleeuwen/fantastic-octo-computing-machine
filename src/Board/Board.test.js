// absolute imports first
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// relative imports second
import Board from './Board';

// setup enzyme
Enzyme.configure({ adapter: new Adapter() });

describe('Board tests', () => {
    const wrapper = shallow(<Board />);
    
    it('renders an input component', () => {
        expect(wrapper.find('input').length).toBe(1);
    });
    
    it('should render three board rows', () => {
        expect(wrapper.find('.board-row').length).toBe(3);
    });
})
