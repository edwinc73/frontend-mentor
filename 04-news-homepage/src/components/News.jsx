export default function News({ title, body }) {
  return (
    <article>
      <h3 className="text-white"> {title}</h3>
      <p className="text-muted text-white"> {body}</p>
      <hr />
    </article>
  );
}
