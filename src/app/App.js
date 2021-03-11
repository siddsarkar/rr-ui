import "./App.scss";
import NavBar from "./components/navbar/navbar";
import logo from "../assets/logo.png";
import chevronUp from "../assets/up-chevron.svg";
import { useEffect, useRef, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const topRef = useRef(null);

  const getData = () => {
    const requestURL = `https://www.readingright.in/apiservice/article/read/?format=json&user_id=57`;
    const driveRequest = new Request(requestURL, {
      method: "GET",
    });

    return fetch(driveRequest).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw response.status;
    });
  };

  useEffect(() => {
    getData().then((json) => {
      setArticles(json.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <div ref={topRef} />
      <NavBar logo={logo} />
      <div className="App-main">
        {loading ? (
          <div className="loader"></div>
        ) : (
          articles.map((article) => {
            return (
              <div className="article" key={article.id}>
                <img
                  className="article-cover"
                  src={"https://www.readingright.in/" + article.art_image}
                  alt="mkm"
                />
                <div className="article-meta">
                  <div>The Caravan | 2 Weeks Ago</div>
                  <p>
                    Elon Musk is known to have a not-so-conventional view of
                    things. It comes as no surprise that the Tesla CEO isn’t a
                    ‘fan’ of the traditional form of working. Elon Musk is known
                    to have a not-so-conventional view of things. It comes as no
                    surprise that the Tesla CEO isn’t a ‘fan’ of the traditional
                    form of working…
                  </p>
                  <div>Science & Technology</div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {articles.length > 0 && (
        <div className="btn-container">
          <div className="more-btn">View More</div>
        </div>
      )}
      <div className="App-footer">
        <div
          className="top-btn"
          onClick={() => topRef.current.scrollIntoView({ behaviour: "smooth" })}
        >
          <img src={chevronUp} alt="^"></img>
        </div>
        <p> Ⓒ 2020 - 2021 Reading Right. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
