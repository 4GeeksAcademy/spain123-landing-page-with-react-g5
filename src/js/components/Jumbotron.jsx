import React from 'react';

const Jumbotron = ({title, text, students}) => {
    return (
        <div className="jumbotron-container">
            <div className="p-5 mb-4 bg-light rounded-3">

                <h1 className="display-5 fw-bold">{title || "Landing Page"}</h1>

                <p className="jumbotron-text col-md-8 fs-4">
                    {text || "Trabajando en equipo con Abel y Lucas"}</p>

                {students && <div className="jumbotron-actions">{students}</div>}
                <button class="btn btn-primary btn-lg" type="button">Call to action</button>
            </div>
        </div>
    );
};

export default Jumbotron;