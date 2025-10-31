import React from 'react';

const Jumbotron = ({title, text, students}) => {
    return (
        <div className="jumbotron-container">
            <h1>{title || "Landing Page"}</h1>

            <p className="jumbotron-text">
                {text || "trabajando en equipo con Abel y Lucas"}</p>

            {students && <div className="jumbotron-actions">{students}</div>}
        </div>
    );
};

export default Jumbotron;