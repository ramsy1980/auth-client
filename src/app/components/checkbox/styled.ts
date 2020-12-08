import styled from 'styled-components';

export const RememberMeCheckboxContainer = styled.div`
    align-items: center;
    display: flex;
`

export const RememberMeCheckbox = styled.input`
    height: 1rem;
    width: 1rem;
`

export const RememberMeCheckboxLabel = styled.label`
    --text-opacity: 1; // text-gray-900
    color: rgba(17, 24, 39, var(--text-opacity)); // text-gray-900
    display: block;
    font-size: 0.875rem; // text-sm
    line-height: 1.25rem; // text-sm
    margin-left: 0.5rem;
` 