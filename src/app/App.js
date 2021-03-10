import "./App.scss";
import NavBar from "./components/navbar/navbar";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

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

      console.log(json.data);
    });
  }, []);

  return (
    <div className="App">
      <NavBar logo={logo} />

      <div className="App-main">
        {articles.map((article) => {
          return (
            <div id={article.id}>
              <img
                src={"https://www.readingright.in/" + article.art_image}
                alt="mkm"
              />
              <div dangerouslySetInnerHTML={{ __html: article.art_data }}></div>
            </div>
          );
        })}
      </div>

      <div className="App-footer">Footer</div>
    </div>
  );
}

export default App;
