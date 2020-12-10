import React from "react";
import { faLock, faRocket } from "@fortawesome/free-solid-svg-icons";
import { InputField } from "../../components/input-field"
import { Link } from '../../components/link';
import * as Styled from './styled';
import { Checkbox } from "../../components/checkbox";

export const Login = () => {
    return (
        <Styled.Container>
            <Styled.LoginContainer>
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
                <Styled.Form>
                    <input type="hidden" name="remember" value="true" />
                    <Styled.InputContainer>
                        <InputField
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required={true}
                            label="Email address"
                            placeholder="Email address"
                            roundedBorder="top"
                            hideBorder="bottom"
                        />
                        <InputField
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required={true}
                            label="Password"
                            placeholder="Password"
                            roundedBorder="bottom"
                        />
                    </Styled.InputContainer>

                    <Styled.RememberMeContainer>
                        <Checkbox id="remember_me" name="remember_me" label="Remember me"/>

                        <Styled.LinkContainer>
                            <Link to="#">
                                Forgot your password?
                            </Link>
                        </Styled.LinkContainer>
                    </Styled.RememberMeContainer>

                    <div>
                        <Styled.Button type="submit">
                             <Styled.ButtonIcon icon={faLock} size="1x" />
                            <span>Sign in</span>
                        </Styled.Button>
                    </div>
                </Styled.Form>
            </Styled.LoginContainer>
        </Styled.Container>
    )
}