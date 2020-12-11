import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '.';

describe('Button', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button title="Test" />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})