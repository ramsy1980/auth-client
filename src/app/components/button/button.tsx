import { faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { StyledButton, StyledButtonIcon } from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: IconDefinition
    title: string;
    isLoading?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {

    const { icon, type, title, isLoading, ...rest } = props;

    const renderIcon = () => {
        if (isLoading) {
            return <StyledButtonIcon icon={faSpinner} spin={true} />
        }
        if (icon) {
            return <StyledButtonIcon icon={icon} />
        }
        return null;
    }

    return (
        <StyledButton type={type} {...rest} disabled={isLoading}>
            {renderIcon()}
            <span>{title}</span>
        </StyledButton>
    )
}