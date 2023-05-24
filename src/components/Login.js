import React from 'react'
import { loginEndpoint } from '../spotify'
import "./login.css";
import MusiQlogo from "../Assets/MusiQ-logo.png"

export default function Login() {
  return (
    <div className='login-page'>
        <img src={MusiQlogo} alt="MusiQ logo"/>
        <a href={loginEndpoint}>
            <div className="login">
                Login with Spotify
            </div>
        </a>

    </div>
  )
}
