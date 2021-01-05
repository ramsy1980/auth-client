import React, { FunctionComponent } from "react";
import { faLock, faRocket } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import { Checkbox, Form, Button, Header, Container, Link, InputField } from "../../components";
import * as Styled from './styled';
import { useAuth } from "../../hooks";

interface LoginProps {}

export const Login: FunctionComponent<LoginProps> = () => {


    const { auth } = useAuth();
    const history = useHistory();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await auth.login({ email, password })

            setEmail('');
            setPassword('')

            history.push('/profile')
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <Container>
            <Header
                icon={faRocket}
                title="Sign in to your account"
                linkText="start your 14-day free trial"
                linkTo="/register"
            />
            <Form onSubmit={handleSubmit}>
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
                />
            </Form>
        </Container>
    )
}