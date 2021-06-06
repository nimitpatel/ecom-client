import { Link } from "react-router-dom"

export const Button = ({ label, type, onClick, icon, href, className = '' }) => {
    const renderButton = () => {
        switch (type) {
            case 'atag':
                return (
                    <a href={href}>
                        <label htmlFor={label}>{label}</label>
                        <i>{icon && icon}</i>
                    </a>
                )
            case 'link':
                return (
                    <Link to={`/${href}`}>
                        <label htmlFor={label}>{label}</label>
                        <i>{icon && icon}</i>
                    </Link>
                )
            default:
                return (
                    <button onClick={() => onClick()}>
                        <label htmlFor={label}>{label}</label>
                        <i>{icon && icon}</i>
                    </button>
                )
        }
    }

    return (
        <div className={`button ${className && className}`}>
            {renderButton()}
        </div>
    )
}