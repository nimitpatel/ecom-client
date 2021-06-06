import { Link } from "react-router-dom"

import { useCheckAuth } from "../../hooks"
import { Button } from "./Button"

import { CartIcon, ProfileIcon, UnlockIcon } from "../../assets/icon"

export const Navbar = _ => {
    const { isAuth } = useCheckAuth()

    return (
        <nav>
            <h3>Shoppie</h3>
            <div className="action">
                {
                    isAuth ?
                        <>
                            <Link to="/cart" className="item" >
                                <CartIcon />
                            </Link>
                            <Link to="/profile" className="item" >
                                <ProfileIcon />
                            </Link>
                        </> :
                        <Button 
                            type="atag"
                            label="unlock"
                            href='/login'
                            icon={<UnlockIcon />}
                            className="login-btn"
                        />
                }
            </div>
        </nav>
    )
}