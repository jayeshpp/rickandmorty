import "./style.scss";

function CharacterCard({ image, name, species, status }) {
  return (
    <article className="card">
      <aside className="card__aside">
        <figure className="card__figure">
          <img src={image} alt={name} className="card__image" />
        </figure>
      </aside>
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className="card__copy">
          {status} - {species}
        </p>
      </div>
    </article>
  );
}

export default CharacterCard;
