import Article from "./Article";
import { articleContent } from "../articleContent";

export default function ArticleList() {
  return (
    <section id="articleList-section" className="container">
      <div className="row">
        {articleContent.map(({ image, number, title, body }) => {
          return (
            <Article
              key={number}
              image={image}
              number={number}
              title={title}
              body={body}
            ></Article>
          );
        })}
      </div>
    </section>
  );
}
