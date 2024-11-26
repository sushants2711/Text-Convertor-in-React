import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './button';

export default function TextForm(props) {
    const [text, setText] = useState("start ....");

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleUppercase = () => {
        setText(text.toUpperCase());
    };

    const handlelowercase = () => {
        setText(text.toLowerCase());
    }

    return (
        <>
            <div className="container mt-4">
                <h1 className="mt-4 mb-4">{props.headingis}</h1>
                <div className="mb-3">
                    <textarea className="form-control bg-dark text-white" id="exampleFormControlTextarea1" rows="14" onChange={handleOnChange} value={text}
                    ></textarea>
                </div>
            </div>

            <Button text="UPPERCASE" onClick={handleUppercase} className="btn btn-primary mx-4" />
            <Button text="lowercase" onClick={handlelowercase} className="btn btn-primary mx-4" />
        </>
    );
}

TextForm.propTypes = {
    headingis: PropTypes.string,
};
