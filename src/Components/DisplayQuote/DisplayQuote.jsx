import  React  from  'react';
import './DisplayQuote.css'

const  DisplayQuote = ({ quote }) => {
    return (
        <div  className="DisplayQuote">
            <ul id='css-ids-are-bad-mkayyy'>
                <li><strong>{quote.character}</strong></li>
                <br></br>
                <li><em>{quote.quote}</em></li>
                <br></br>
                <li><img src={quote.image} height="200px" alt="picture" id={`id${quote.character}`}/></li>

            </ul>
        </div>
    );
};

export  default  DisplayQuote;