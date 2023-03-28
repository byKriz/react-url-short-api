import React from "react";
import { useState } from "react";
import styles from "./LinkShorter.module.scss";
import axios from "axios";
import { LinkItem } from "../../components/LinkItem/LinkItem";

export const LinkShorter = () => {
  const [url, setUrl] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);
  const [urls, setUrls] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (url !== "") {
      try {
        const response = await axios.post(
          `https://api.shrtco.de/v2/shorten?url=${url}`
        );
        setUrls([
          ...urls,
          {
            original: url,
            short: response.data.result.short_link,
            full_short: response.data.result.full_short_link,
          },
        ]);
        setUrl("");
        setEmptyInput(false);
      } catch (e) {
        console.error(e);
      }
    } else {
      setEmptyInput(true);
    }
  };

  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
  };

  return (
    <section className={styles.LinkShorter}>
      <div className={styles.shorterContainer}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Shorter Link Here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={emptyInput ? `${styles.error}` : ""}
          />
          {emptyInput === true && (
            <p>
              <i>Please add link</i>
            </p>
          )}
          <button type="submit">Shorten It!</button>
        </form>
      </div>

      <div className={styles.linksContainer}>
        <ul>
          {urls.map((url, i) => (
            <li key={i} className={styles.linkItem}>
              <a
                href={`https://${url.original}`}
                target="_blank"
                className={styles.originalLink}
              >
                {url.original}
              </a>
              <div className={styles.bar}></div>
              <a href={url.full_short} target="_blank">
                {url.short}
              </a>
              <button
                className={styles.copyBtn}
                id={`copy-btn-item-${i}`}
                onClick={() => copyLink(url.full_short)}
              >
                Copy
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
