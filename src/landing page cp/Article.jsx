import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Article = ({ items }) => {

  const date = items.publishedAt
  const formatDate = date.replace('T', ' ')
  const formatTime = formatDate.replace('Z', '')

  return (
    <>
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={items.urlToImage} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{formatTime}</p>
          <h3>{items.title}</h3>
        </div>
        <p><Link to={items.url}>Read Full Article</Link></p> 
      </div>
    </div>
    <Outlet />
    </>
  )
};

export default Article;
