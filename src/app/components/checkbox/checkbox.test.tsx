import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from '.';

describe('Checkbox', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Checkbox label="Test" id="test" name="test" />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})