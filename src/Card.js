import React from "react";

const Card = ({ name, id, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}?150x150`} alt="robots"></img>
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
