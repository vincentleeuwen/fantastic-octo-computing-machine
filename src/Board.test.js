import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Board from './Board';

it('renders an input component', () => {
    expect(shallow(<Board />).find('input').length).toBe(1);
});

it('should render without throwing an error', function() {
    expect(shallow(<Board />).find('.board-row').length).toBe(3);
});