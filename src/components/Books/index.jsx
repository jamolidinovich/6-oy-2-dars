import "./index.css";
function Books(props) {
  return (
    <div className="cards">
      <div className="card">
        <div key={props.id} className="bookCard">
          <h3 className="author">Author: {props.author}</h3>
          <h3 className="country">Country: {props.country}</h3>
          <div className="language">Language: {props.language}</div>
          <a className="link" href={props.link}>
            Link
          </a>
          <div className="pages">Pages: {props.pages}</div>
          <div className="title">Title: {props.title}</div>
          <div className="year">Year: {props.year}</div>
        </div>
      </div>
    </div>
  );
}

export default Books;
