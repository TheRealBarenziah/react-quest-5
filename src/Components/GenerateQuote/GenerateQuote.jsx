import  React  from  'react';

const  GenerateQuote = ({ selectQuote }) => {
    return (
        <div  className="GenerateEmployee">
        <button  onClick={selectQuote}>Get new quote</button>
        </div>
    );
};

export  default  GenerateQuote;