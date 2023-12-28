import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const FeatureCard = ({ icon, title, content, index, link }) => {
  const navigate = useNavigate()

  return (
    <>
  <div style={{ cursor: "pointer"}} onClick={() => navigate(link)} className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
    </>
  )
};

const Business = () =>  (
  <section id="features" className={layout.section}> 
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You handle the money, <br className="sm:block hidden" /> we’ll do the trades.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right investment plan, you can improve your financial life, earning returns while saving money. The foundations to generational wealth.
      </p>

      <Button styles={`mt-10`} content="Get Started" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <Slide duration={1500}>
        <FeatureCard key={feature.id} {...feature} index={index} />
        </Slide>
      ))}
    </div>
  </section>
);

export default Business;
