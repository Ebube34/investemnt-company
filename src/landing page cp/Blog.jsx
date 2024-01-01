import React from "react";
import Article from "./Article";
import styles from "../style";
import { News01, News02, News03, News04, News05 } from "../assets";
import { Slide } from "react-awesome-reveal";

const Blog = () => {
 
  return (
    <div className="gpt3__blog" id="blog">
      <div className="gpt3__blog-heading">
        <h2 className={styles.heading2} style={{ fontWeight: "600" }}>
          Latest news <br />{" "}
        </h2>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
        <Slide triggerOnce={true} duration={1500}>
          <Article newsImage={News02} newsUrl="https://readwrite.com/cryptocurrency/upcoming-icos/" title="ICOs are the best way to invest in brand-new cryptocurrencies before they explode. Ethereum, Filecoin, Chainlink, and many other" time="2024-1-25T15:16:32Z" />
          </Slide>
        </div>
        <div className="gpt3__blog-container_groupB">
        <Slide triggerOnce={true} duration={1500}>
        <Article newsImage={News03} newsUrl="https://readwrite.com/bitcoin-sees-price-boost-of-175-in-crypto-market-surge/" title="Bitcoin price surges by 175% amid US ETF hopes" time="2024-2-06T13:49:16Z" />
        </Slide>

        <Slide triggerOnce={true} duration={1500}>
        <Article newsImage={News01} newsUrl="https://www.coindesk.com/tech/2023/12/04/mantle-releases-liquid-staking-protocol-expanding-beyond-layer-2-operator/" title="Mantle Releases Liquid Staking Protocol, Expanding Beyond Layer-2 Operator" time="2023-12-04T10:00:00Z" />
        </Slide>
        <Slide triggerOnce={true} duration={1500}>
        <Article newsImage={News05} newsUrl="https://abovethelaw.com/2023/11/finance-docket-cryptos-terrible-horrible-no-good-very-bad-actually-kind-of-hopeful-for-the-future-month/" title="Finance Docket: Crypto’s Terrible, Horrible, No Good, Very Bad, Actually Kind Of Hopeful For The Future Month" time="2024-1-30T23:03:42Z" />
        </Slide>
        <Slide triggerOnce={true} duration={1500}>
        <Article newsImage={News04} newsUrl="https://www.forbes.com/sites/jeffkauflin/2023/11/28/from-fintechs-top-founders-to-wall-streets-best-dealmakers-30-under-30-finance-2024/" title="From Fintech’s Top Founders To Wall Street’s Best Dealmakers: 30 Under 30 Finance 2024" time="2024-1-25T15:16:32Z" />
        </Slide>
        </div>
      </div>
    </div>
  );
};

export default Blog;
