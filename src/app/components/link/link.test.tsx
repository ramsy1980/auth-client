import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Link } from '.'

describe('Link', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter><Link to="/" /></MemoryRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})