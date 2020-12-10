import { FunctionComponent } from 'react';
import { LinkProps } from 'react-router-dom';
import StyledLink from './styled';

export const Link: FunctionComponent<LinkProps> = (props) => {
    const { children, ...rest } = props;

    return (
        <StyledLink {...rest}>
            {children}
        </StyledLink>
    )
}
