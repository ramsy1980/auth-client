import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { StyledButton, StyledButtonIcon } from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: IconDefinition
    title: string;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {

    const { icon, type, title, ...rest } = props;

    return (
        <StyledButton type={type} {...rest}>
            {
                icon && (
                    <StyledButtonIcon icon={icon} />
                )
            }
            <span>{title}</span>
        </StyledButton>
    )
}