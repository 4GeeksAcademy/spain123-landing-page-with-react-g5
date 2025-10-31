import React from "react";

import rigoImage from '../../img/rigo-baby.jpg';

const Card = (props) => {
  return (
    <div className="card">
  <img src={props.img || rigoImage } className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title || "Sin Titulo"}</h5>
    <p className="card-text">{props.text || "Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
    <a href={props.link || "#"} className="btn btn-primary">{props.buttonLabel || "Go somewhere"}</a>
  </div>
</div>
  );
}

export default Card;