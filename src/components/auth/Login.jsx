import { host } from '../../config'

import { GoogleImg } from "../../assets/img";

export const Login = _ => (
    <a href={`${host}/auth/google`} className="login-wrap">
        <img src={GoogleImg} alt="signin with google" />
    </a>
)