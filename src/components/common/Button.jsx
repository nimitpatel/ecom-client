export const Button = ({ label, type, onClick, icon, href }) => {
    const renderButton = () => {
        if (type === "link") {
            return (
                <a href={href}>
                    {label}
                    {icon && icon}
                </a>
            )
        } else {
            <button onClick={() => onClick()}>
                {label}
                {icon && icon}
            </button>
        }
    }

    return (
        <div className="button">
            {renderButton()}
        </div>
    )
}