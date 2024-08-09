import News from "./News";
import { newsContent } from "../newsContent";

export default function NewsList() {
  return (
    <article className="col-4 bg-dark p-4">
      <h2 className="fw-bold">New</h2>
      {newsContent.map(({ title, body, id }) => {
        return <News key={id} title={title} body={body}></News>;
      })}
    </article>
  );
}
