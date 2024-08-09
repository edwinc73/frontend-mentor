import News from "./News";
import { newsContent } from "../newsContent";
import "./NewsList.css";
export default function NewsList() {
  return (
    <article className="col-12 col-lg-4 mt-5 mt-lg-0">
      <div className="col p-4 bg-blue">
        <h2 className="text-orange">New</h2>
        {newsContent.map(({ title, body, id }) => {
          return <News key={id} title={title} body={body}></News>;
        })}
      </div>
    </article>
  );
}
