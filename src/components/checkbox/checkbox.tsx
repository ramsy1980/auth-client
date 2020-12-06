import React, { FunctionComponent } from 'react';
import * as Styled from './styled';

interface CheckboxProps {
    id: string;
    name: string;
    label?: string;
}

export const Checkbox: FunctionComponent<CheckboxProps> = (props) => {

    const { id, name, label } = props;

    return (
        <Styled.RememberMeCheckboxContainer>
            <Styled.RememberMeCheckbox id={id} name={name} type="checkbox" />
            {
                label && (
                    <Styled.RememberMeCheckboxLabel htmlFor={id}>
                        {label}
                    </Styled.RememberMeCheckboxLabel>
                )
            }

        </Styled.RememberMeCheckboxContainer>
    )
}