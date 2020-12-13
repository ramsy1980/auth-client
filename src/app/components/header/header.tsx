import { faRocket } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from '../link';
import * as Styled from './styled';

export const Header = () => {
    return (
        <React.Fragment>
            <Styled.Header>
                <Styled.HeaderIconContainer>
                    <Styled.HeaderIcon
                        icon={faRocket}
                        size="3x"
                    />
                </Styled.HeaderIconContainer>
                <Styled.HeaderTitle>
                    Sign in to your account
                    </Styled.HeaderTitle>
                <Styled.HeaderText>
                    {" Or "}
                    <Link to="/register">
                        start your 14-day free trial
                    </Link>
                </Styled.HeaderText>
            </Styled.Header>
        </React.Fragment>
    )
}