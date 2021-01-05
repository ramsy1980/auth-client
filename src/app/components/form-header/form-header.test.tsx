import { faRocket } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { FormHeader } from '.';

describe('FormHeader', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter>
                <FormHeader
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