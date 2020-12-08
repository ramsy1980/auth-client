import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from '.'

describe('Link', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Link to="/" />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})