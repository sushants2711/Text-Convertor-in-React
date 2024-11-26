
import PropTypes from 'prop-types';

export default function Button( { text="Button", onClick, className="btn btn-primary" } ) {
    return (
        <button className = { className } onClick={ onClick } >
            { text }
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
};
