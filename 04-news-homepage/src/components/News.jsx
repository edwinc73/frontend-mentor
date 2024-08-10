import { Link } from "react-router-dom";

export default function News({ title, body }) {
  return (
    <article className="news-article pt-3">
      <Link to="/">
        <h3 className="text-white"> {title}</h3>
        <p className="text-white pb-2" style={{ opacity: "0.5" }}>
          {body}
        </p>
        <hr />
      </Link>
    </article>
  );
}
