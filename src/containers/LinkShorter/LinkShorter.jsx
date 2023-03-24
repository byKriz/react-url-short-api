import React from "react";
import { useState } from "react";
import styles from "./LinkShorter.module.scss";
import axios from "axios";

export const LinkShorter = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urls, setUrls] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      //   setShortUrl(response.data.result.short_link);
      setUrls([
        ...urls,
        {
          original: url,
          short: response.data.result.short_link,
          full_short: response.data.result.full_short_link,
        },
      ]);
      setUrl("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className={styles.LinkShorter}>
      <div className={styles.shorterContainer}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Shorter Link Here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">Shorten It!</button>
        </form>
        {/* {shortUrl && <a href={shortUrl}>{shortUrl}</a>} */}
      </div>
      <div className={styles.linksContainer}>
        <ul>
          {urls.map((url, i) => (
            <li key={i}>
              <a href={url.full_short}>{url.short}</a> - {url.original}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
