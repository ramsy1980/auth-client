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
        type,
        ...rest
    } = props;

    return (
        <div>
            {
                label && (
                    <Styled.LabelSrOnly htmlFor={id}>
                        {label}
                    </Styled.LabelSrOnly>)
            }

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
        </div>
    )
}