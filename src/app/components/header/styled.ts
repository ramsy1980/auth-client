import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

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