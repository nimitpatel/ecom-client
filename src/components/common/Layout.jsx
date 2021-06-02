import { Button } from "./Button"
import { Navbar } from "./Navbar"

export const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <footer>
                <p>&copy; <span>{new Date().getFullYear()}</span> <Button type="link" label="nimit patel" href="https://twitter.com/heynimit" /></p>
            </footer>
        </>
    )
}