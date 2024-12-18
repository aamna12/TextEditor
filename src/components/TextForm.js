import React,{useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    
    const upperCaseConvert=()=>{
        let upperText=text.toUpperCase();
        updatedText(upperText);
        props.showAlert("Text has been converted to UpperCase","success")
    };

    const handleOnChange=(event)=>{
    updatedText(event.target.value);
    };

    const lowerCaseConvert=()=>{
        let lowerText=text.toLowerCase();
        updatedText(lowerText);
        props.showAlert("Text has been converted to LowerCase","success")
    }

    const capitalizeCase=()=>{
        let capitalText=text.charAt(0).toUpperCase()+text.slice(1);
        updatedText(capitalText);
        props.showAlert("Text has been Capitalized","success")
    }

    const clearCase=()=>{
        updatedText("");
    }

    const emailExtract=()=>{
        const exp=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
        const valid=text.match(exp);
        if (valid){
            updatedText(valid);
        }
        else{
            updatedText("");
        }
        
    }

    const [text, updatedText]=useState("");
    //updatedText("aamna akhtar");
  return (
   <>
<div className="mb-3">
  <label htmlFor="textBox" className={`form-label text-${props.textPageMode}`}>{props.text}</label>
  <textarea className="form-control" id="textBox" onChange={handleOnChange} value={text} rows="8"></textarea>
</div>
<button type="button" disabled={text.length===0} className='btn btn-primary my-1' onClick={upperCaseConvert}>Convert to Uppercase</button>
<button type="button" disabled={text.length===0} className='btn btn-secondary mx-5 my-1' onClick={lowerCaseConvert}>Convert to Lowercase</button>
<button type="button"  disabled={text.length===0} className='btn btn-success mx-1 my-1' onClick={capitalizeCase}>Capitalize Text</button>
<button type="button" disabled={text.length===0} className='btn btn-danger mx-5 my-1' onClick={clearCase}>Clear Text</button>
<button type="button" disabled={text.length===0} className='btn btn-warning mx-1 my-1' onClick={emailExtract}>Get the Email address from text</button>

<div className='container my-5'>
    <h1 className={`text-${props.textPageMode}`}>The summary of your Text</h1>
    <p className={`text-${props.textPageMode}`}>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} Words and {text.length} Characters</p>
    {/*<p>{parseFloat(0.0032 * text.split(" ").length).toFixed(2)} Average minutes taken to read the above text</p>*/}
    <div className='container my-5'>
    <h3 className={`text-${props.textPageMode}`}>Preview of the text</h3>
    <p className={`text-${props.textPageMode}`}>{text}</p>
    </div> 
</div>
</>
  );
}

TextForm.propTypes={
    text:PropTypes.string
}
