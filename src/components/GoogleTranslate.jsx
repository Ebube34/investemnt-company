import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    if (window.document.scrollingElement.hasAttribute("style")) {
      window.document.scrollingElement.setAttribute("style", "");
    }
  });

  return (
    <>
    <div style={{ width: "100%", display: "flex"}}>
    <div style={{display: "flex", width: "180px"}} id="google_translate_element"></div>
    </div>
    
    </>
  );
};


export default GoogleTranslate;