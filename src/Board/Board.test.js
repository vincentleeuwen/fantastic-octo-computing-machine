// absolute imports first
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// relative imports second
import Board from './Board';

// setup enzyme
Enzyme.configure({ adapter: new Adapter() });

describe('Board tests', () => {
    it('renders an input component', () => {
        expect(shallow(<Board />).find('input').length).toBe(1);
    });
    
    it('should render three board rows', function() {
        expect(shallow(<Board />).find('.board-row').length).toBe(3);
    });
})
