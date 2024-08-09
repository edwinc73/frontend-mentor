export default function Article({ image, number, title, body }) {
  return (
    <article className="col-lg-4 col-12 mt-3">
      <div className="row">
        <div className="col-4">
          <img src={image.src} className="img-fluid" alt={image.alt} />
        </div>
        <div className="col-8">
          <h3 className="text-red">{number}</h3>
          <h5 className="fw-bold">{title}</h5>
          <p className="">{body}</p>
        </div>
      </div>
    </article>
  );
}
