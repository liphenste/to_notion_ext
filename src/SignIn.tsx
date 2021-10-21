import React, { ReactElement } from 'react';
import Button from 'react-bootstrap/Button';
import './SignIn.css';

export default function SignIn(): ReactElement {
    const client_id = "0c4d2e6e-0a7d-4f3b-98ce-a230301477a8";
    const redirect_uri = "https%3A%2F%2Fnorthamerica-northeast1-studious-bit-325802.cloudfunctions.net%2Fnotion-auth";
    const href = `https://api.notion.com/v1/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&owner=user`;

    return (
        <a className="SignIn" href={href} target="_blank" rel="noreferrer">Sign In</a>
    )
}
