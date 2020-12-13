import styled from 'styled-components';

export default styled.div`
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

export const ChildContainer = styled.div`
    margin-bottom: 2rem;
    margin-top: 2rem;
    max-width: 28rem;
    width: 100%;
`