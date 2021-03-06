import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const StyledButton = styled.button`
    --bg-opacity: 1; // bg-indigo-600
    --text-opacity: 1; // text-white
    --text-opacity-disabled: .5;
    --text-white: rgba(255, 255, 255, var(--text-opacity));
    --text-disabled: rgba(255, 255, 255, var(--text-opacity-disabled));
    align-items: center;
    background-color: rgba(79, 70, 229, var(--bg-opacity)); // bg-indigo-600
    border-color: transparent;
    border-radius: 0.375rem;
    color: ${(props: ButtonProps) => props.disabled ? 'var(--text-disabled)' : 'var(--text-white)'}; // text-white
    cursor: ${(props: ButtonProps) => props.disabled ? 'not-allowed' : 'pointer'};
    display: grid;
    font-size: 0.875rem;
    font-weight: 500;
    grid-template-columns: repeat(3, 1fr);
    line-height: 1.25rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    width: 100%;

    &:hover {
        --bg-opacity: 1; // bg-indigo-700
        /* background-color: rgba(67, 56, 202, var(--bg-opacity)); // bg-indigo-700 */
        background-color: ${(props: ButtonProps) => !props.disabled && 'rgba(67, 56, 202, var(--bg-opacity))'};
        transition: all, 0.3s;

        & > svg {
            --text-opacity: 1; // text-indigo-300
            /* color: rgba(165, 180, 252, var(--text-opacity)); // text-indigo-300 */
            color: ${(props: ButtonProps) => !props.disabled && 'rgba(165, 180, 252, var(--text-opacity))'};
            transition: all, 0.3s;
        }
    }
`

export const StyledButtonIcon = styled(FontAwesomeIcon)`
    --text-opacity: 1; // text-indigo-500
    color: rgba(99, 102, 241, var(--text-opacity)); // text-indigo-500
    height: 1.25rem;
    width: 1.25rem;
    transition: all, 0.2s;

`
