import React, { FunctionComponent } from "react";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { InputField } from "../../components/input-field"
import * as Styled from './styled';
import { Form } from "../../components/form";
import { Button } from "../../components/button";
import { FormHeader } from "../../components/form-header";
import { Container } from "../../components/container";
import { Link } from '../../components/link';
import { Checkbox } from "../../components/checkbox";
import { useRequest } from "../../hooks";
import { AuthenticationService } from "../../../core/infrastructure";
import { useHistory } from "react-router-dom";
import { User } from "../../../../../../core/domain/entities";

interface RegisterProps {
    service: AuthenticationService
}

export const Register: FunctionComponent<RegisterProps> = (props) => {

    const { service } = props;

    const [email, setEmail] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const history = useHistory();
    const { doRequest, errors, loading } = useRequest({
        request: () => service.register({
            email,
            firstName,
            lastName,
            password,
        }),
        onSuccess: ({ email }: User) => {
            history.push(`/emails/${email}/confirm`)
        }
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        doRequest();
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormHeader
                    icon={faRocket}
                    linkText="sign in to your account"
                    linkTo="/login"
                    title="Start your 14-day free trial"
                />
                <Styled.InputContainer>
                    <InputField
                        autoComplete="given-name"
                        hideBorder="bottom"
                        id="first-name"
                        label="First name"
                        name="first-name"
                        onBlur={e => setFirstName(e.target.value.trim())}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="First name"
                        required={true}
                        roundedBorder="top"
                        type="text"
                        value={firstName}
                    />
                    <InputField
                        autoComplete="family-name"
                        hideBorder="bottom"
                        id="last-name"
                        label="Last name"
                        name="last-name"
                        onBlur={e => setLastName(e.target.value.trim())}
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Last name"
                        required={true}
                        type="string"
                        value={lastName}
                    />

                    <InputField
                        autoComplete="email"
                        hideBorder="bottom"
                        id="email"
                        label="Email"
                        name="email"
                        onBlur={e => setEmail(e.target.value.trim())}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        required={true}
                        type="email"
                        value={email}
                    />
                    <InputField
                        autoComplete="current-password"
                        id="password"
                        label="Password"
                        name="password"
                        onBlur={e => setPassword(e.target.value.trim)}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        required={true}
                        roundedBorder="bottom"
                        type="password"
                        value={password}
                    />

                </Styled.InputContainer>

                <Styled.AcceptTOSContainer>
                    <Checkbox
                        id="newsletter"
                        label="Subscribe to our newsletter to receive latest updates"
                        name="newsletter"
                    />
                    <Styled.TOSText>
                        By clicking <strong>Start trial</strong>,
                        you agree to our <Link to="#">terms of service</Link> and
                        that you have read our <Link to="#">privacy policy</Link>,
                        including our <Link to="#">cookie policy</Link>
                    </Styled.TOSText>
                </Styled.AcceptTOSContainer>

                {errors}

                <Button
                    icon={faRocket}
                    isLoading={loading}
                    title="Start trial"
                    type="submit"
                />
            </Form>
        </Container>
    )
}