import React, { useEffect, useState } from "react";
import { Navbar, Footer, Blog } from "../../landing page cp";
import Loading from "../../components/LoaderCompoent";
import { Timeline } from "react-ts-tradingview-widgets";

const News = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />

      <div style={{ padding: "10rem 1rem 0" }}>
        <Blog />
        <div style={{ padding: "2rem 1rem " }}></div>

        <Timeline colorTheme="dark" width="100%" />
      </div>

      <Footer />
    </>
  );
};

export default News;
