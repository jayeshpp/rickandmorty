function CardShimmer() {
  return (
    <article className="card">
      <aside className="card__aside">
        <figure className="card__figure">
          <img
            src="https://placehold.co/600x400?text=:)"
            alt="placeholer"
            className="card__image"
          />
        </figure>
      </aside>
      <div className="card__body">
        <h3 className="card__title">-</h3>
        <p className="card__copy">-</p>
      </div>
    </article>
  );
}

export default CardShimmer;
