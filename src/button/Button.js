import './Button.css';

function Button({ className = "button", text = "click", clickHandler, type = "button" }) {

    return (
        <button
            className={className}
            onClick={clickHandler}
            type={type}
        >
            {text}
        </button>
    )
}

export default Button