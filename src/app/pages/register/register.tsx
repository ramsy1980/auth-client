import React from "react";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { InputField } from "../../components/input-field"
import * as Styled from './styled';
import { Form } from "../../components/form";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Container } from "../../components/container";
import { Link } from '../../components/link';
import { Checkbox } from "../../components/checkbox";

export const Register = () => {
    return (
        <Container>
            <Header
                icon={faRocket}
                title="Start your 14-day free trial"
                linkText="sign in to your account"
                linkTo="/login"
            />
            <Form>
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

                <Styled.AcceptTOSContainer>
                    <Checkbox id="newsletter" name="newsletter" label="Receive latest updates" />
                    <Styled.TOSText>
                        By clicking <strong>Start trial</strong>,
                        you agree to our <Link to="#">terms of service</Link> and
                        that you have read our <Link to="#">privacy policy</Link>,
                        including our <Link to="#">cookie policy</Link>
                    </Styled.TOSText>
                </Styled.AcceptTOSContainer>

                <Button
                    type="submit"
                    title="Start trial"
                    icon={faRocket}
                />
            </Form>
        </Container>
    )
}