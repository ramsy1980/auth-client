import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
    --text-opacity: 1;
    color: rgba(79, 70, 229, var(--text-opacity)); // text-indigo-600
    text-decoration: none;

    &:hover {
        --text-opacity: 1; // text-indigo-500
        color: rgba(99, 102, 241, var(--text-opacity)); // text-indigo-500
    }
`;