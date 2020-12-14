import { faRocket } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '.';

describe('Header', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter>
                <Header
                    icon={faRocket}
                    linkText="linkText"
                    linkTo="linkTo"
                    title="title"
                />
            </MemoryRouter>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})