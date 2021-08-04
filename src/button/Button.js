import './Button.css';

function Button({ text = "click", clickHandler }) {

    return (
        <button
            className="button"
            onClick={clickHandler}
        >
            {text}
        </button>
    )
}

export default Button