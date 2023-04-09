import React, { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Heatmap from "../components/Heatmap";
import Info from "../components/Info";
import InfoV2 from "../components/InfoV2";
import Interests from "../components/Interests";
import ProfessionalInfo from "../components/ProfessionalInfo";
import ProfInfoV2 from "../components/ProfInfoV2";
import Password from "../components/Password";
const ProfilePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Heatmap />
      {/* <Info /> */}
      <InfoV2 />
      {/* <ProfessionalInfo /> */}
      <ProfInfoV2 />
      <Password />
      <Interests />
    </>
  );
};

export default ProfilePage;
