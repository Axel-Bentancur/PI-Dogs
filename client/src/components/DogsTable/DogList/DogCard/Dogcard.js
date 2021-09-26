import React from "react";
import "./Dogcard.css";
import { Link } from "react-router-dom";

export default function DogCard({ dog }) {
  const dbTemp = dog.temperamentos;
  const stringTemp = () => {
    let str = "";
    dog.temperamentos.map(function (item) {
      return (str += ` ${item.type},`);
    });
    let tempString = str.slice(0, -1);
    return <span className="info">{`Temperament: ${tempString}`}</span>;
  };

  if (dog.msg) {
    return (
      <div className="card no-dog">
        <div className="info-no-dog">
          <span className="no-dog-msg">{dog.msg}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card" key={dog.id}>
        <div className="img-container">
          <div className="dog-img">
            <img src={dog.image.url} alt="dog" />
          </div>
        </div>
        <div className="info-dog">
          <span className="breed-name">{dog.name}</span>
          {dbTemp ? (
            stringTemp()
          ) : (
            <span className="info">{`Temperament: ${dog.temperament}`}</span>
          )}
          <span className="info">{`Weight: ${dog.weight.metric} kg`}</span>
          <Link to={`/dogs/breed/${dog.name}`}>
            <div className="button-info">
              <span className="button-more info">+ MORE</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
