import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Register } from '.';

describe('Register', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter>
                <Register service={jest.fn() as any}/>
            </MemoryRouter>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})