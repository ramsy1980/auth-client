import { FunctionComponent, HTMLProps } from 'react';
import StyledLink from './styled';

interface LinkProps extends HTMLProps<HTMLAnchorElement> {
    to: string
}

export const Link: FunctionComponent<LinkProps> = (props) => {
    const { children, to, ...rest } = props;
    return (
        <StyledLink href={to} {...rest}>
            {children}
        </StyledLink>
    )
}
