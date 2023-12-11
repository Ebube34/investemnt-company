import React, {useState, useEffect } from 'react';
import Article from "./Article";
// import { articleImg01, articleImg02, articleImg03, articleImg04, articuleImg05 } from '../assets';
import styles from "../style";

const Blog = () => {
  const [items, setItems] = useState([])

  
  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=400c57761b2e4bc3842e8865c25ddb60")
    .then(res => res.json())
    .then(data => setItems(data.articles))
  }, [])

  return  (
    <div className="gpt3__blog" id="blog">
      <div className="gpt3__blog-heading">
        <h2 className={styles.heading2} style={{ fontWeight: "600"}}>Latest news <br /> </h2>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          {items.filter((item, index) => index < 1).map((filteredItem, i) => <Article items={filteredItem} key={i}/> )}
        </div>
        <div className="gpt3__blog-container_groupB">
          {items.filter((item, index) => index > 1 && index < 6).map((filteredItem, index) => <Article items={filteredItem} key={index} /> )}
        </div>
      </div>
    </div>
  )
};

export default Blog;
