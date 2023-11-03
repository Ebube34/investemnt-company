import React from 'react';
import Article from "./Article";
import { articleImg01, articleImg02, articleImg03, articleImg04, articuleImg05 } from '../assets';
import styles from "../style";

const Blog = () => (
  <div className="gpt3__blog" id="blog">
    <div className="gpt3__blog-heading">
      <h2 className={styles.heading2} style={{ fontWeight: "600"}}>Latest news <br /> from the financial world.</h2>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={articleImg01} date="dec 26, 2023" text="Bitcoin rally shows cryptocurrency resilience after FTX debacle" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={articleImg02} date="dec 26, 2023" text="Global Tax Reform May Add $250 Billion a Year to Public Coffers" />
        <Article imgUrl={articleImg03} date="dec 26, 2023" text="Could Inflation make a comeback?" />
        <Article imgUrl={articleImg04} date="dec 26, 2023" text="LPL welcomes $250M team from UBS in Austin, Texas" />
        <Article imgUrl={articuleImg05} date="dec 26, 2023" text="Biden criticizes advisors who prioritize their pay over clients’ returns" />
      </div>
    </div>
  </div>
);

export default Blog;
