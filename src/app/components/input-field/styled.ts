import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export interface RoundedBorderProps {
    roundedBorder?: "top-left" | "top-right" | "top" | "bottom-left" | "bottom-right" | "bottom" | "both" | "none"
    hideBorder?: "top" | "bottom"
}

export const LabelSrOnly = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
`

export const StyledInput = styled.input`
    width: 100%;
    appearance: none;
    --text-opacity: 1; // text-gray-900
    color: rgba(17, 24, 39, var(--text-opacity)); // text-gray-900
    /* padding-left: 0.75rem; */
    /* padding-right: 0.75rem; */
    text-indent: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-width: 1px;
    --border-opacity: 1; // border-gray-300
    border-color: rgba(209, 213, 219, var(--border-opacity)); // border-gray-300
    border-style: solid;
    border-radius: 0;
    display: block;
    margin: 0;
    background-color: #FFF;
    position: relative;
    font-size: 1rem;
    line-height: 1.5rem;

    border-top-left-radius: ${(props: RoundedBorderProps) => props.roundedBorder === "top-left" ? "0.375rem" : props.roundedBorder === "top" || props.roundedBorder === "both" ? "0.375rem" : 0};
    border-top-right-radius: ${(props: RoundedBorderProps) => props.roundedBorder === "top-right" ? "0.375rem" : props.roundedBorder === "top" || props.roundedBorder === "both" ? "0.375rem" : 0};
    border-bottom-left-radius: ${(props: RoundedBorderProps) => props.roundedBorder === "bottom-left" ? "0.375rem" : props.roundedBorder === "bottom" || props.roundedBorder === "both" ? "0.375rem" : 0};
    border-bottom-right-radius: ${(props: RoundedBorderProps) => props.roundedBorder === "bottom-right" ? "0.375rem" : props.roundedBorder === "bottom" || props.roundedBorder === "both" ? "0.375rem" : 0};

    margin-top: ${(props: RoundedBorderProps) => props.hideBorder === "top" ? "-1px" : "inherit"};
    margin-bottom: ${(props: RoundedBorderProps) => props.hideBorder === "bottom" ? "-1px" : "inherit"};


    ::placeholder,
    ::-webkit-input-placeholder {
        --text-opacity: 1; // text-gray-500
        color: rgba(107, 114, 128, var(--text-opacity));; // text-gray-500
    }
    :-ms-input-placeholder {
        --text-opacity: 1; // text-gray-500
        color: rgba(107, 114, 128, var(--text-opacity));; // text-gray-500
    }

    @media (min-width: 640px) {
        font-size: 0.875rem;
        line-height: 1.25rem;
    }

    &:focus {
        z-index: 10;
        --ring-inset: var(--empty,/*!*/ /*!*/);
        --ring-offset-width: 0px;
        --ring-offset-color: #fff;
        --ring-color: #2563eb;
        --ring-offset-shadow: var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color);
        --ring-shadow: var(--ring-inset) 0 0 0 calc(1px + var(--ring-offset-width)) var(--ring-color);
        --shadow: 0 0 #0000;
        outline: 2px solid transparent;
        outline-offset: 2px;
        --border-opacity: 1;
        border-color: rgba(99, 102, 241, var(--border-opacity));
        box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000);
    }
`

export const PasswordIcon = styled(FontAwesomeIcon)`
    position: relative;
    left: calc(100% - 25px);
    bottom: 1.75rem;
`