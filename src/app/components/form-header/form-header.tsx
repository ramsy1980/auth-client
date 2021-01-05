import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React, { FunctionComponent } from 'react';
import { Link } from '../link';
import * as Styled from './styled';

interface FormHeaderProps {
    icon: IconDefinition;
    title: string;
    linkTo: string;
    linkText: string;
}

export const FormHeader: FunctionComponent<FormHeaderProps> = (props) => {
    const { icon, linkText, linkTo, title } = props;
    return (
        <React.Fragment>
            <Styled.FormHeader>
                <Styled.FormHeaderIconContainer>
                    <Styled.FormHeaderIcon
                        icon={icon}
                        size="3x"
                    />
                </Styled.FormHeaderIconContainer>
                <Styled.FormHeaderTitle>
                    {title}
                </Styled.FormHeaderTitle>
                <Styled.FormHeaderText>
                    {" Or "}
                    <Link to={linkTo}>
                        {linkText}
                    </Link>
                </Styled.FormHeaderText>
            </Styled.FormHeader>
        </React.Fragment>
    )
}