import React, { useState } from "react";
import useFetch from "./useFetch";
import Loader from "./Loader";
import Error from "./Error";

const App = () => {
  const [url, setUrl] = useState("https://api.adviceslip.com/advice");
  const { data, loading, error } = useFetch(url);

  // Xatoliklarni konsolda ko'rsatish
  if (error) {
    return <Error message={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      {error && <p>Error: {error}</p>} {/* Xatolik haqida ma'lumot */}
      {data && (
        <div className="advice-box">
          <h5 className="advice-subtitle">
            Advice #<span>{data.slip.id}</span>
          </h5>
          <h2 className="advice-title">{data.slip.advice}</h2>
          <div className="advice-line"></div>
          <button
            className="advice-button"
            onClick={() => {
              // Cache muammosini hal qilish uchun URL'ga vaqtni qo'shish
              setUrl(
                `https://api.adviceslip.com/advice?timestamp=${Date.now()}`
              );
            }}
          >
            <img src="/button-image.svg" alt="Get Advice" />
          </button>
        </div>
      )}
    </main>
  );
};

export default App;
