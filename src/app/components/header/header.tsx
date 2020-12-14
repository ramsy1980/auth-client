import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React, { FunctionComponent } from 'react';
import { Link } from '../link';
import * as Styled from './styled';

interface HeaderProps {
    icon: IconDefinition;
    title: string;
    linkTo: string;
    linkText: string;
}

export const Header: FunctionComponent<HeaderProps> = (props) => {
    const { icon, linkText, linkTo, title } = props;
    return (
        <React.Fragment>
            <Styled.Header>
                <Styled.HeaderIconContainer>
                    <Styled.HeaderIcon
                        icon={icon}
                        size="3x"
                    />
                </Styled.HeaderIconContainer>
                <Styled.HeaderTitle>
                    {title}
                </Styled.HeaderTitle>
                <Styled.HeaderText>
                    {" Or "}
                    <Link to={linkTo}>
                        {linkText}
                    </Link>
                </Styled.HeaderText>
            </Styled.Header>
        </React.Fragment>
    )
}