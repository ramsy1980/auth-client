import styled from 'styled-components';

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
    border-radius: 0.375rem;
`

export const AcceptTOSContainer = styled.div`
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    min-height: 22px;
`

export const TOSText = styled.div`
    margin-top: 1.5rem;
`
