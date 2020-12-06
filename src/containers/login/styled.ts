import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
    --bg-opacity: 1;
    align-items: center;
    background-color: rgba(249, 250, 251, var(--bg-opacity)); // bg-gray-50
    display: flex;
    justify-content: center;
    min-height: 100vh;
    padding-left: 1rem;
    padding-right: 1rem;

    @media (min-width: 1024px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    @media (min-width: 640px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
`

export const LoginContainer = styled.div`
    margin-bottom: 2rem;
    margin-top: 2rem;
    max-width: 28rem;
    width: 100%;
`

export const Header = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const HeaderTitle = styled.h2`
    --text-opacity: 1;
    color: rgba(17, 24, 39, var(--text-opacity)); // text-gray-900
    font-size: 1.875rem;  // 3xl
    font-weight: 800;
    line-height: 2.25rem; // 3xl
    margin-top: 1.5rem;
    margin-bottom: 0;
    text-align: center;
`
export const HeaderIconContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`
export const HeaderIcon = styled(FontAwesomeIcon)`
    height: 3rem;
    --text-opacity: 1;
    color: rgba(79, 70, 229, var(--text-opacity)); // text-indigo-600
`

export const HeaderText = styled.p`
    --text-opacity: 1;
    color: rgba(75, 85, 99, var(--text-opacity)); // text-gray-600
    font-size: 0.875rem;  // sm
    line-height: 1.25rem; // sm
    margin-top: 0.5rem;
    text-align: center;
`

export const Link = styled.a`
    --text-opacity: 1;
    color: rgba(79, 70, 229, var(--text-opacity)); // text-indigo-600
    text-decoration: none;

    &:hover {
        --text-opacity: 1; // text-indigo-500
        color: rgba(99, 102, 241, var(--text-opacity)); // text-indigo-500
    }
`
export const Form = styled.form`
    margin-top: 1rem;
`

export const InputContainer = styled.div`
    --shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --ring-offset-shadow: 0 0 #0000;
    --ring-shadow: 0 0 #0000;
    box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--shadow);
`

export const RememberMeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`

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

export const Button = styled.button`
    --bg-opacity: 1; // bg-indigo-600
    --text-opacity: 1; // text-white
    align-items: center;
    background-color: rgba(79, 70, 229, var(--bg-opacity)); // bg-indigo-600
    border-color: transparent;
    border-radius: 0.375rem;
    color: rgba(255, 255, 255, var(--text-opacity)); // text-white
    cursor: pointer;
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
        background-color: rgba(67, 56, 202, var(--bg-opacity)); // bg-indigo-700

        & > svg {
            --text-opacity: 1; // text-indigo-300
            color: rgba(165, 180, 252, var(--text-opacity)); // text-indigo-300
        }
    }
`

export const ButtonIcon = styled(FontAwesomeIcon)`
    --text-opacity: 1; // text-indigo-500
    color: rgba(99, 102, 241, var(--text-opacity)); // text-indigo-500
    height: 1.25rem;
    width: 1.25rem;
`