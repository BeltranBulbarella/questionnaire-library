import React from 'react';

const SingleChoice: React.FC<{ question: string, options: string[] }> = ({ question, options }) => {
    return (
        <div>
            <h3>{question}</h3>
            {options.map(option => (
                <button key={option}>{option}</button>
            ))}
        </div>
    );
}

export default SingleChoice;
