import React, { FunctionComponent } from "react";
import { faLock, faRocket } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import { Checkbox, Form, Button, FormHeader, Container, Link, InputField } from "../../components";
import * as Styled from './styled';
import { useRequest } from "../../hooks";
import { AuthenticationService } from "../../../core/infrastructure";

interface LoginProps {
    service: AuthenticationService
}

export const Login: FunctionComponent<LoginProps> = (props) => {

    const { service } = props;

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const history = useHistory();

    const { doRequest, errors, loading } = useRequest({
        request: () => service.login({ email, password }),
        onSuccess: () => {
            history.push('/profile')
        },
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        doRequest()
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormHeader
                    icon={faRocket}
                    title="Sign in to your account"
                    linkText="start your 14-day free trial"
                    linkTo="/register"
                />
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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
                    isLoading={loading}
                />
                {errors}
            </Form>
        </Container>
    )
}