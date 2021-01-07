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
                    title="Start your 14-day free trial"
                    linkText="sign in to your account"
                    linkTo="/login"
                />
                <Styled.InputContainer>
                    <InputField
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        required={true}
                        label="First name"
                        placeholder="First name"
                        roundedBorder="top"
                        hideBorder="bottom"
                        onChange={e => setFirstName(e.target.value)}
                        onBlur={e => setFirstName(e.target.value.trim())}
                    />
                    <InputField
                        id="last-name"
                        name="last-name"
                        type="string"
                        autoComplete="family-name"
                        required={true}
                        label="Last name"
                        placeholder="Last name"
                        hideBorder="bottom"
                        onChange={e => setLastName(e.target.value)}
                        onBlur={e => setLastName(e.target.value.trim())}
                    />

                    <InputField
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required={true}
                        label="Email"
                        placeholder="Email"
                        hideBorder="bottom"
                        onChange={e => setEmail(e.target.value)}
                        onBlur={e => setEmail(e.target.value.trim())}
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
                        onChange={e => setPassword(e.target.value)}
                        onBlur={e => setPassword(e.target.value.trim())}
                    />

                </Styled.InputContainer>

                <Styled.AcceptTOSContainer>
                    <Checkbox
                        id="newsletter"
                        name="newsletter"
                        label="Subscribe to our newsletter to receive latest updates"
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
                    type="submit"
                    title="Start trial"
                    icon={faRocket}
                    isLoading={loading}
                />
            </Form>
        </Container>
    )
}