import styled from 'styled-components';

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

export const Link = styled.a`
    --text-opacity: 1;
    color: rgba(79, 70, 229, var(--text-opacity)); // text-indigo-600
    text-decoration: none;

    &:hover {
        --text-opacity: 1; // text-indigo-500
        color: rgba(99, 102, 241, var(--text-opacity)); // text-indigo-500
    }
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
export const LinkContainer = styled.div`
    font-size: 0.875rem;
    line-height: 1.25rem;
`