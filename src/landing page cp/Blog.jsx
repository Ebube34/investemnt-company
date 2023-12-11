import React, { useState, useEffect } from "react";
import Article from "./Article";
import styles from "../style";
import ReactLoading from "react-loading";
import axios from "axios";

const Blog = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=cryptocurrency+bitcoin+ethereum&sortBy=top&apiKey=400c57761b2e4bc3842e8865c25ddb60"
        )
        .then((res) => {
          setItems(res.data.articles);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(true);
        });
    }
  }, [loading]);

  return (
    <div className="gpt3__blog" id="blog">
      <div className="gpt3__blog-heading">
        <h2 className={styles.heading2} style={{ fontWeight: "600" }}>
          Latest news <br />{" "}
        </h2>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          {loading
            ? " "
            : items
                .filter((item, index) => index < 1)
                .map((filteredItem, i) => (
                  <Article items={filteredItem} key={i} />
                ))}
        </div>
        <div className="gpt3__blog-container_groupB">
          {loading ? (
            <div className="spinner-div">
              <ReactLoading
                type={"spinningBubbles"}
                color={"#1CEEEB"}
                height={20}
                width={20}
              />
            </div>
          ) : (
            items
              .filter((item, index) => index > 1 && index < 6)
              .map((filteredItem, index) => (
                <Article items={filteredItem} key={index} />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
