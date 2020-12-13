import React from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { InputField } from "../../components/input-field"
import { Link } from '../../components/link';
import * as Styled from './styled';
import { Checkbox } from "../../components/checkbox";
import { Form } from "../../components/form";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Container } from "../../components/container";

export const Login = () => {
    return (
        <Container>
            <Header />
            <Form>
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
                    <Checkbox id="remember_me" name="remember_me" label="Remember me" />

                    <Styled.LinkContainer>
                        <Link to="#">
                            Forgot your password?
                            </Link>
                    </Styled.LinkContainer>
                </Styled.RememberMeContainer>

                <Button
                    type="submit"
                    title="Sign in"
                    icon={faLock}
                />
            </Form>
        </Container>
    )
}