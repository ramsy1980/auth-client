import React from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, Styled.RoundedBorderProps {
    label?: string;
}

export const InputField = (props: InputProps) => {

    const {
        autoComplete,
        className,
        id,
        label,
        name,
        placeholder,
        required,
        type: fieldType,
        ...rest
    } = props;


    const [type, setType] = React.useState(fieldType);

    const isPasswordField = fieldType === 'password';
    const isPasswordHidden = type === 'password';

    const togglePassword = () => {
        setType(prevState => prevState === 'password' ? 'text' : fieldType)
    }

    const renderLabel = () => {
        if (label)
            return <Styled.LabelSrOnly htmlFor={id}>
                {label}
            </Styled.LabelSrOnly>
            
        return null;
    }

    const renderIcon = () => {
        if (isPasswordField)
            return <Styled.PasswordIcon
                icon={isPasswordHidden ? faEye : faEyeSlash}
                onClick={togglePassword}
            />

        return null;
    }

    return (
        <div>
            {renderLabel()}
            <Styled.StyledInput
                autoComplete={autoComplete}
                className={className}
                id={id}
                name={name}
                placeholder={placeholder}
                required={required}
                type={type}
                {...rest}
            />
            {renderIcon()}
        </div>
    )
}