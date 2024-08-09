export default function News({ title, body }) {
  return (
    <article className="news-article pt-3">
      <h4 className="text-white"> {title}</h4>
      <p className="text-white pb-2" style={{ opacity: "0.5" }}>
        {body}
      </p>
      <hr />
    </article>
  );
}
