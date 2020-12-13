import { FunctionComponent } from 'react';
import StyledContainer, { ChildContainer } from './styled';

interface ContainerProps { }

export const Container: FunctionComponent<ContainerProps> = (props) => {
    const { children, ...rest } = props;
    return (
        <StyledContainer {...rest}>
            <ChildContainer>
                {children}
            </ChildContainer>
        </StyledContainer>
    )
}