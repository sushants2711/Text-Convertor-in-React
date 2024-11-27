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


    const handleReset = () => {
        setText("")
    }

    const handleCapitalize = () => {
        setText(
            text
                .split(" ") 
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
                .join(" ") 
        );
    };
    

    return (
        <>
            <div className="container mt-4">
                <h1 className="mt-4 mb-4">{props.headingis}</h1>
                <div className="mb-3">
                    <textarea className="form-control bg-dark text-white" id="exampleFormControlTextarea1" rows="10" onChange={handleOnChange} value={text}
                    ></textarea>
                </div>
                <Button text="UPPERCASE" onClick={handleUppercase} className="btn btn-primary mx-4" />
                <Button text="lowercase" onClick={handlelowercase} className="btn btn-primary mx-4" />
                <Button text="Reset" onClick={handleReset} className="btn btn-danger mx-4" />
                <Button text="Capitalize Case" onClick={handleCapitalize} className='btn btn-primary mx-4'/>
            </div>

            <div className="container mt-4">
                <h4> Your Text Summary </h4>
                <p> Word is: <b> {! text.trim().length ? 0 : text.trim().split(" ").length} </b> & characters is: <b> {text.trim().length} </b> </p>
            </div>

            <div className="container">
                <p><b>Preview: </b> {text} </p>
            </div>
        </> 
    );
}

TextForm.propTypes = {
    headingis: PropTypes.string,
};
