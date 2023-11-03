import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h3 className={styles.heading3}>Let’s try our service now!</h3>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Step in to the future of investing.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button content="Request early access" />
    </div>
  </section>
);

export default CTA;
