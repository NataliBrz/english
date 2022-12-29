

function Card({ word, description }) {
  return (
    <div className="wordcard">
      <div className="cardword">{word}</div>
      <div className="carddescription">{description}</div>
    </div>
  );
}

export default Card;
