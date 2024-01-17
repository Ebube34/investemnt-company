import React, { useEffect, useState, useRef } from "react";
import { TranslateOutlined } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import styles from "../style";
const GoogleTranslate = () => {
  const forMobile = useMediaQuery("(max-width: 1000px)");

  const [translateStyleObj, setTranslateStyleObj] = useState(
    forMobile
      ? {
          position: "absolute",
          left: "5%",
          top: "80px",
          display: "none",
          zIndex: "99999",
          backgroundColor: "#000",
          borderRadius: "10px",
          padding: "25px",
        }
      : {
          position: "absolute",
          right: "5%",
          top: "80px",
          display: "none",
          zIndex: "99999",
          backgroundColor: "#36353D",
          borderRadius: "10px",
          padding: "25px",
        }
  );
  const googleTranslateBox = useRef(null);

  function googleTranslateElementInit() {
    let removeElem = document.getElementById("google_translate_element");
    if (removeElem.childNodes.length === 0) {
      try {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      } catch {}
    }
  }

  useEffect(() => {
    window.googleTranslateElementInit = googleTranslateElementInit;
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    addScript.setAttribute("async", "true");
    addScript.setAttribute("type", "text/javascript");
    document.body.appendChild(addScript);
  }, []);

  useEffect(() => {
    let handler = (e) => {
      if (
        googleTranslateBox.current &&
        !googleTranslateBox.current.contains(e.target)
      ) {
        setTranslateStyleObj({ ...translateStyleObj, display: "none" });
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleTranslate = () =>
    translateStyleObj.display === "none"
      ? setTranslateStyleObj({ ...translateStyleObj, display: "block" })
      : setTranslateStyleObj({ ...translateStyleObj, display: "none" });

  // rendering below
  return (
    <div
      className="nav-item"
      style={{ padding: "10px 15px", background: "#151623" }}
      ref={googleTranslateBox}
    >
      <div style={{ display: "flex", marginLeft: "34%" }}>
        <p
          onClick={handleTranslate}
          style={{ cursor: "pointer" }}
          className={styles.paragraph2}
        >
          Select language
        </p>
        <TranslateOutlined
          onClick={handleTranslate}
          style={{
            color: "#ffffff",
            cursor: "pointer",
            margin: "5px 10px",
          }}
        />
      </div>
      <div style={translateStyleObj}>
        <div id="google_translate_element"></div>
      </div>
    </div>
  );
};

export default GoogleTranslate;
