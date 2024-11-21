import React, { useState } from "react";
import useFetch from "./useFetch";
import Loader from "./Loader";

const App = () => {
  const [url, setUrl] = useState("https://api.adviceslip.com/advice");
  const { data, loading, error } = useFetch(url);

  console.log(data);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      {data && (
        <div className="advice-box">
          <h5 className="advice-subtitle">
            Advice #<span>{data.slip.id}</span>
          </h5>
          <h2 className="advice-title">{data.slip.advice} </h2>
          <div className="advice-line"></div>
          <button
            className="advice-button"
            onClick={() => {
              setUrl("https://api.adviceslip.com/advice");
            }}
          >
            <img src="../public/button-image.svg" alt="" />
          </button>
        </div>
      )}
    </main>
  );
};

export default App;
