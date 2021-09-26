import React from "react";
import "./Dogcard.css";
import { Link } from "react-router-dom";

export default function DogCard({ dog }) {
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
          {dog.temperament?.type ? (
            <span className="info">{`Temperament: ${dog.temperament.type}`}</span>
          ) : (
            <span className="info">{`Temperament: ${dog.temperament}`}</span>
          )}
          <span className="info">{`Weight: ${dog.weight.imperial} kg`}</span>
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
