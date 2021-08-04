import './Button.css';

function Button({ text = "click", clickHandler, type = "button" }) {

    return (
        <button
            className="button"
            onClick={clickHandler}
            type={type}
        >
            {text}
        </button>
    )
}

export default Button