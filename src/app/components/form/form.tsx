import { FunctionComponent } from 'react';
import * as Styled from './styled';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {

}

export const Form: FunctionComponent<FormProps> = (props) => {
    const { children, ...rest } = props;
    return (
        <Styled.Form {...rest}>
            {children}
        </Styled.Form>
    )
}