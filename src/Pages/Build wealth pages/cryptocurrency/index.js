import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "../../../landing page cp";
import Loading from "../../../components/LoaderCompoent";
import { buildwealth06 } from "../../../assets";
import styles from "../../../style";

const WhatIsCryptoAndHowDoesItWork = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3400);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <Navbar />
        <div>
          <div style={{ padding: "11rem 1rem 0" }}>
            <p style={{ padding: "2rem 0 2rem" }} className={styles.heading5}>
              Budgeting
            </p>

            <h1 className={styles.heading2}>
              What Does Financially Independent Mean?
            </h1>

            <p style={{ padding: "2rem 0" }} className={styles.paragraph2}>
              By{" "}
              <span
                className={styles.heading6}
                style={{
                  borderRight: "1px solid  #46454C",
                  padding: "0 1rem 0 0.2rem",
                  marginRight: "1rem",
                }}
              >
                {" "}
                Stacy Howard
              </span>{" "}
              Updated on December 28, 2022
            </p>
          </div>

          <div style={{ padding: "2rem 1rem" }}>
            <img alt="bugeting stories" src={buildwealth06} width="100%" />
          </div>

          <div style={{ padding: "0rem 1rem" }}>
            <div>
              <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
                Attaining financial independence for many individuals is often
                challenging without a job that fosters self-sufficiency.
                However, for young people today, reaching this milestone is
                taking longer compared to the past. Approximately four decades
                ago, most individuals could secure employment enabling financial
                independence in their 20s. Presently, a study conducted by the
                Georgetown University Center on Education and the Workforce
                (CEW) reveals that for the majority of young adults, achieving a
                job that fully supports them typically extends to their 30th
                birthday.
                <div style={{ margin: "1.5rem 0" }} /> Even if you are still in
                the process of searching for a job that ensures economic
                self-sufficiency, there are proactive steps you can take to
                expedite your journey toward financial independence. Explore
                more about financial independence and discover strategies to
                accelerate your progress.
              </p>
            </div>
          </div>

          <div style={{ padding: "1rem" }}>
            <div
              style={{ padding: "3rem 1rem", borderLeft: "3px solid #00E8C6" }}
            >
              <h1 className="font-poppins xs:text-[22px] text-[22px] text-white xs:leading-[20.8px] leading-[20.8px]">
                Key Takeaways
              </h1>

              <p
                style={{ padding: "2rem 0 1rem 0" }}
                className={styles.paragraph2}
              >
                {" "}
                &#8226; To be financially independent, you must have enough
                income to cover your own bills and expenses.
              </p>

              <p className={styles.paragraph2}>
                {" "}
                &#8226; Many young adults struggle to be financially independent
                of their parents due to the rising cost of living.
              </p>

              <p
                style={{ padding: "1rem 0 1rem 0" }}
                className={styles.paragraph2}
              >
                &#8226; To work towards financial independence, begin saving to
                move out on your own, pay down debt, and manage your money with
                a budget.
              </p>
              <p
                style={{ padding: "1rem 0 1rem 0" }}
                className={styles.paragraph2}
              >
                &#8226; Being financially independent also means planning for
                the future. Invest for retirement, build an emergency fund, and
                work toward other long-term financial goals.
              </p>
            </div>
          </div>

          <div style={{ padding: "4rem 1rem 2rem" }}>
            <h1 className={styles.heading4}>
              What Does It Mean To Be Financially Independent?
            </h1>
            <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
              If you are financially independent, you are responsible for your
              own expenses. You no longer rely on a parent, guardian, or another
              family member to provide money for you or cover your bills. You
              are paying your daily expenses and planning for the future, and
              you are able to meet your basic needs.
              <div style={{ margin: "1.5rem 0" }} />
              Reaching financial independence will take longer for some than for
              others. It will also depend on your own lifestyle and needs. For
              example, if you need to pay for college or graduate school, you
              may consider living at home for a while to save money. In this
              case, financial independence would be a few years away.
            </p>
          </div>

          <div
            style={{
              margin: "1rem",
              padding: "3rem 1rem",
              borderLeft: "3px solid #00E8C6",
            }}
          >
            <h1 className="font-poppins xs:text-[22px] text-[22px] text-white xs:leading-[20.8px] leading-[20.8px]">
              Note
            </h1>

            <p style={{ padding: "2rem 0 0" }} className={styles.paragraph2}>
              Financial independence can also be the point where you no longer
              need to work in order to cover your daily expenses. For most
              people, this won't occur until retirement.
            </p>
          </div>

          <div style={{ padding: "4rem 1rem 2rem" }}>
            <h1 className={styles.heading4}>
              When To Become Financially Independent
            </h1>
            <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
              The pursuit of financial independence can take on diverse meanings
              influenced by the cultural and social context of one's upbringing.
              In certain families, there might be an anticipation that adult
              children will assume full financial responsibility from the age of
              18. Conversely, in other families, the norm might involve adult
              children residing at home or receiving parental assistance even
              after securing full-time employment.
              <div style={{ margin: "1.5rem 0" }} />
              In many United States households, the prevailing expectation is
              that children will achieve financial independence upon completing
              college and securing employment. However, reaching this milestone
              can be influenced by broader economic factors such as the job
              market and escalating living costs. For instance, a 2022 study by
              Savings.com revealed that half of parents with adult children
              provide some form of financial support, averaging around $1,000
              per month.
            </p>
          </div>

          <div
            style={{
              margin: "1rem",
              padding: "3rem 1rem",
              borderLeft: "3px solid #00E8C6",
            }}
          >
            <h1 className="font-poppins xs:text-[22px] text-[22px] text-white xs:leading-[20.8px] leading-[20.8px]">
              Note
            </h1>

            <p style={{ padding: "2rem 0 0" }} className={styles.paragraph2}>
              Many adults also provide financial support to their parents. A
              2020 study by AARP found that 32% of mid-life adults help their
              parents with bills, groceries, and other living expenses, and 42%
              expect that they will need to do so in the future.
            </p>
          </div>

          <div style={{ padding: "2rem 1rem 2rem" }}>
            <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
              Moreover, as of July 2020, 52% of young adults resided with one or
              both parents, marking an increase from 47% in February of the same
              year.4 It is a typical scenario for recent college graduates to
              temporarily live at home during the initial months post-graduation
              while actively seeking employment. However, if achieving financial
              independence is among your objectives, it becomes crucial to
              establish a clear timeline for when you intend to officially move
              out.
              <div style={{ margin: "1.5rem 0" }} />
              While preparing for the transition to independent living, you can
              also implement additional measures to progress toward financial
              independence and enhance your ability to sustain yourself.
            </p>
          </div>

          <div
            style={{
              margin: "1rem",
              padding: "3rem 1rem",
              borderLeft: "3px solid #00E8C6",
            }}
          >
            <h1 className="font-poppins xs:text-[22px] text-[22px] text-white xs:leading-[20.8px] leading-[20.8px]">
              Note
            </h1>

            <p style={{ padding: "2rem 0 0" }} className={styles.paragraph2}>
              Before you move out, be sure that you are complete ready mentally
              and financially to do so. Ensure you have enough savings to cover
              the first month's rent, as well as any security deposit, and
              consider building up an emergency fund of at least three months of
              living expenses.
            </p>
          </div>

          <div style={{ padding: "4rem 1rem 2rem" }}>
            <h1 className={styles.heading4}>
              How To Become Financially Independent
            </h1>
            <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
              Now that you have a sense of when achieving financial independence
              is advisable, let's explore the practical steps to make it happen.
              <div style={{ margin: "1.5rem 0" }} />
              The initial stride towards financial independence involves
              securing a reliable income that sustains your needs. Ideally,
              you'll secure a full-time job either before or shortly after
              graduating from college. In cases where your job doesn't cover all
              living expenses, you might need to take on additional work to
              bridge the gap and create a financial cushion.
              <div style={{ margin: "1.5rem 0" }} />
              Upon receiving a job offer, it's essential to inquire about
              employee benefits, encompassing aspects like health insurance and
              retirement savings options such as a 401(k). While your salary
              constitutes the main part of your compensation, benefits
              contribute significantly to financial security. Prioritizing
              insurance and planning for retirement from an early stage are
              pivotal aspects of the journey to financial independence.
              <div style={{ margin: "1.5rem 0" }} />
              After commencing your job, allow a few months to assess its
              suitability. It's acceptable to reside with your parents during
              the period you're saving for your own place and building an
              emergency fund, as long as you establish a definite timeline for
              this arrangement.
            </p>
          </div>

          <div
            style={{
              margin: "1rem",
              padding: "3rem 1rem",
              borderLeft: "3px solid #00E8C6",
            }}
          >
            <h1 className="font-poppins xs:text-[22px] text-[22px] text-white xs:leading-[20.8px] leading-[20.8px]">
              Note
            </h1>

            <p style={{ padding: "2rem 0 0" }} className={styles.paragraph2}>
              To boost your retirement savings, take advantage of any employer
              401(k) match. Each organization will have its own matching
              formula. An employer’s 401(k) match is typically stated as a
              percentage of your contribution up to a maximum amount of your
              salary. One of the most common matches is a dollar-for-dollar
              match of up to 3% of an employee’s salary.
            </p>
          </div>

          <div style={{ padding: "2rem 1rem 2rem" }}>
            <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
              The next crucial step toward achieving financial independence is
              effective money management to ensure that your expenditures align
              with your income. Develop a practical budget that considers your
              new salary, living expenses, anticipated bills, debt repayments,
              contributions to retirement, and other savings objectives. For
              those navigating money management for the first time, the 50/30/20
              rule is a widely embraced strategy. This rule divides your budget
              into three primary categories: necessities, discretionary
              spending, and financial goals.
              <div style={{ margin: "1.5rem 0" }} />
              Include discretionary spending, along with costs related to food
              and transportation, in your budget. Once your budget is in place,
              you'll have a clear understanding of the amount available for
              rent. If this figure is modest, consider seeking roommates to
              reduce costs.
              <div style={{ margin: "1.5rem 0" }} />
              Thirdly, commit to ongoing education. Acquire knowledge about
              investing, debt settlement, and building a strong credit history.
              These skills not only contribute to achieving financial
              independence but also serve as safeguards, reducing the likelihood
              of encountering financial difficulties in the future.
              <div style={{ margin: "1.5rem 0" }} />
              Lastly, keep your savings goals in focus. Financial independence
              involves prudent planning for the future. Before embarking on
              independent living, establish an emergency fund capable of
              covering three to six months of basic living expenses, providing a
              safety net in case of job loss or unexpected bills.
              Simultaneously, begin earmarking funds for long-term objectives,
              such as retirement, travel, further education, or a down payment
              on a house.
            </p>
          </div>

          <div
            style={{
              margin: "1rem",
              padding: "3rem 1rem",
              borderLeft: "3px solid #00E8C6",
            }}
          >
            <h1 className="font-poppins xs:text-[22px] text-[22px] text-white xs:leading-[20.8px] leading-[20.8px]">
              Note
            </h1>

            <p style={{ padding: "2rem 0 0" }} className={styles.paragraph2}>
              Keep savings that you may need to access quickly in a high-yield
              savings account. This will allow you to earn more interest than a
              standard savings account, which will grow your savings slightly
              faster.
            </p>
          </div>

          <div style={{ padding: "4rem 1rem 2rem" }}>
            <h1 className={styles.heading4}>When To Accept Financial Help</h1>
            <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
              The next crucial step toward achieving financial independence is
              effective money management to ensure that your expenditures align
              with your income. Develop a practical budget that considers your
              new salary, living expenses, anticipated bills, debt repayments,
              contributions to retirement, and other savings objectives. For
              those navigating money management for the first time, the 50/30/20
              rule is a widely embraced strategy. This rule divides your budget
              into three primary categories: necessities, discretionary
              spending, and financial goals.
              <div style={{ margin: "1.5rem 0" }} />
              Include discretionary spending, along with costs related to food
              and transportation, in your budget. Once your budget is in place,
              you'll have a clear understanding of the amount available for
              rent. If this figure is modest, consider seeking roommates to
              reduce costs.
              <div style={{ margin: "1.5rem 0" }} />
              Thirdly, commit to ongoing education. Acquire knowledge about
              investing, debt settlement, and building a strong credit history.
              These skills not only contribute to achieving financial
              independence but also serve as safeguards, reducing the likelihood
              of encountering financial difficulties in the future.
              <div style={{ margin: "1.5rem 0" }} />
              Lastly, keep your savings goals in focus. Financial independence
              involves prudent planning for the future. Before embarking on
              independent living, establish an emergency fund capable of
              covering three to six months of basic living expenses, providing a
              safety net in case of job loss or unexpected bills.
              Simultaneously, begin earmarking funds for long-term objectives,
              such as retirement, travel, further education, or a down payment
              on a house.
            </p>
          </div>
          <div style={{ padding: "4rem 1rem 2rem" }}>
            <h1 className={styles.heading4}>The Bottom Line</h1>
            <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
            Remember, the money habits you start now will follow you into the future. It is important to start living within your means as quickly as possible. Your parents will not always be able to help you out, especially as they start to retire. So take these steps now to improve your financial situation and eventually become financially independent.
            </p>
          </div>

<div style={{padding: "1rem"}}>
          <div style={{ padding: "2rem 0" }}>
              <h1 className={styles.heading4}>
                Frequently Asked Questions (FAQs)
              </h1>
            </div>
            <div style={{ padding: "2rem 0 0" }}>
              <h1 className="font-poppins xs:text-[24px] text-[24px] text-white xs:leading-[20.8px] leading-[96.8px]">
              How much money do I need to be financially independent?
              </h1>
              <p
                style={{ padding: "2rem 0 4rem 0" }}
                className={styles.paragraph2}
              >
                How much money you will need to be financially independent will depend on your personal expenses. It costs less to be financially independent, for example, in a small town than it would in New York City due to the differences in cost of living. If you have debts, such as student loans, you will also need to earn enough to cover your payments.
              </p>
            </div>
            <div style={{ padding: "0rem 0" }}>
              <h1 className="font-poppins xs:text-[24px] text-[24px] text-white xs:leading-[20.8px] leading-[20.8px]">
              How can I be financially independent without a job?
              </h1>
              <p
                style={{ padding: "2rem 0 4rem 0" }}
                className={styles.paragraph2}
              >
                If you did not inherit money, you will need a job to become financially independent. If you have a high enough salary, you'll be able to invest enough money that you can eventually live off your investments, rather than a salary from a job.
              </p>
            </div>
            </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default WhatIsCryptoAndHowDoesItWork;
