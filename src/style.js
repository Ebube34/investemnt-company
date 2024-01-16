const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading3: "font-poppins font-semibold xs:text-[48px] text-[39px] text-white xs:leading-[66.8px] leading-[56.8px] w-full",
    heading4: "font-poppins xs:text-[28px] text-[29px] text-white xs:leading-[36.8px] leading-[36.8px]",
    heading5: "font-poppins xs:text-[18px] text-[18px] text-white xs:leading-[20.8px] leading-[20.8px]",
    heading6: "font-poppins xs:text-[16px] text-[16px] text-white xs:leading-[20.8px] leading-[20.8px]",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    paragraph2: "font-poppins font-normal text-dimWhite text-[14px] leading-[30.8px]",
    fontFamily: "font-poppins",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start", 
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;