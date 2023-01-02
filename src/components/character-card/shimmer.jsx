function CardShimmer() {
    return (
        <article className="card">
      <aside className="card__aside">
        <figure className="card__figure">
          
        </figure>
      </aside>
      <div className="card__body">
        <h3 className="card__title">-</h3>
        <p className="card__copy">
          -
        </p>
      </div>
    </article>
    )
}

function ShimmerList() {
    return Array.from({length: 5}, (v, k) => <CardShimmer key={k+1}/>)
}

export default ShimmerList