import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Article = ({time, newsImage, newsUrl, title }) => {

  const date = time
  const formatDate = date.replace('T', ' ')
  const formatTime = formatDate.replace('Z', '') 

  return (
    <>
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={newsImage} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{formatTime}</p>
          <h3>{title}</h3>
        </div>
        <p><Link to={newsUrl}>Read Full Article</Link></p> 
      </div>
    </div>
    <Outlet />
    </>
  )
};

export default Article;
