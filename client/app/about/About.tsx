import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">1SHOT LMS?</span>
      </h1>
      
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
        Are you ready to transform your learning experience? Look no further than 1SHOT  LMS, the premier online learning platform designed to address the challenges of todays eLearning landscape for both educators and learners.
          <br />
          <br />
          As the devs 1SHOT, we know firsthand the challenges
          that come with learning and growing in the programming industry.
          That is why we created 1SHOT to provide a space where education is accessible, engaging, and empowering for everyone.
          <br />
          <br />
          At 1SHOT, we believe that quality education should never be out of reach. Our platform aims to democratize learning by offering high-quality educational experiences at competitive prices. We empower educators to share their expertise and creativity, ensuring that learners from all backgrounds can access the knowledge they seek.
          <br />
          <br />
          1SHOT is committed to enhancing learner engagement. We offer interactive course materials and foster vibrant learning communities that encourage collaboration and peer-to-peer interaction. By creating a supportive environment, we help combat disengagement and promote a deeper understanding of course content.
          <br />
          <br />
          At 1SHOT LMS, we are more than just a platform; we are a community of passionate learners and educators. Whether you are looking to enhance your skills or share your knowledge with others, 1SHOT is here to support you every step of the way.
          <br />
          <br />
          So, what are you waiting for? Join the 1SHOT community today, and lets reshape the future of education together. With our affordable courses and collaborative environment, the possibilities for your learning journey are limitless!
          <br />
          <br />
        </p>
        <br />
        <span className="text-[22px]">DEVS</span>
        <h5 className="text-[18px] font-Poppins">
          The Dev. Team of 1SHOT - LMS
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
