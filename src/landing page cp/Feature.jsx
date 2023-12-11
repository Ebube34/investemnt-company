import React from 'react';
import styles from '../style';


const Feature = ({ title, text, navigate }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1 onClick={navigate} style={{ cursor: "pointer"}}>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p className={`${styles.paragraph}`}>{text}</p>
    </div>
  </div>
);

export default Feature;
