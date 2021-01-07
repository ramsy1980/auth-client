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
                    linkText="start your 14-day free trial"
                    linkTo="/register"
                    title="Sign in to your account"
                />
                <Styled.InputContainer>
                    <InputField
                        autoComplete="email"
                        hideBorder="bottom"
                        id="email-address"
                        label="Email address"
                        name="email"
                        onBlur={e => setEmail(e.target.value)}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email address"
                        required={true}
                        roundedBorder="top"
                        type="email"
                        value={email}
                    />
                    <InputField
                        autoComplete="current-password"
                        id="password"
                        label="Password"
                        name="password"
                        onBlur={e => setPassword(e.target.value)}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        required={true}
                        roundedBorder="bottom"
                        type="password"
                        value={password}
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
                    icon={faLock}
                    isLoading={loading}
                    title="Sign in"
                    type="submit"
                />
                {errors}
            </Form>
        </Container>
    )
}