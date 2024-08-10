import { Link } from "react-router-dom";
import "./ArticleList.css";

export default function Article({ image, number, title, body }) {
  return (
    <article className="col-lg-4 col-12 mt-5 mt-md-3">
      <Link to="./" className="row article-link">
        <div className="col-4">
          <img src={image.src} className="img-fluid" alt={image.alt} />
        </div>
        <div className="col-8">
          <h4 className="text-red">{number}</h4>
          <h5 className="fw-bold">{title}</h5>
          <p className="">{body}</p>
        </div>
      </Link>
    </article>
  );
}
