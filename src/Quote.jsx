import { useEffect, useState } from "react";
import "./App.css";
import { LoadingBar } from "./LoadingBar";
import { TiArrowBack } from "react-icons/ti";
export const Quote = () => {
  const [getQuote, setGetQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    const response = await fetch("https://type.fit/api/quotes ");
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    setGetQuote(randomQuote);
    console.log(data);
  };
  const handleClick = async () => {
    setLoading(true);
    await fetchQuote();
    setLoading(false);
  };

  return (
    <div className="main-container">
      <div className="quote">
        <h1>
          "{getQuote.text}"<br />
          <span>Author:{getQuote.author}</span>
        </h1>
      </div>
      <div className="foot">
        {/* <TiArrowBack className="icon" /> */}
        <button className="btn" onClick={handleClick}>
          Get me a Quote
        </button>
        {loading && <LoadingBar />}
      </div>
    </div>
  );
};
