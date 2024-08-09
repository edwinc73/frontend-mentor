export default function Article({ image, number, title, body }) {
  return (
    <article className="col">
      <div className="row">
        <div className="col-4">
          <img src={image.src} className="img-fluid" alt={image.alt} />
        </div>
        <div className="col-8">
          <h3>{number}</h3>
          <p className="fw-bold">{title}</p>
          <p className="">{body}</p>
        </div>
      </div>
    </article>
  );
}
