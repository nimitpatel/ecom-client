import { Button } from "../common/Button";

import { host } from '../../config'

export const Logout = _ => (
    <Button 
        label="Logout"
        type="atag"
        href={`${host}/auth/logout`}
    />
)