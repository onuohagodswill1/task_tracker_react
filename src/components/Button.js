import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
    return (
        <button
            className='btn'
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'green'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
