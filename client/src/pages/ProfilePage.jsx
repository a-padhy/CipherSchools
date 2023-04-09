import React, { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Heatmap from "../components/Heatmap";
import Info from "../components/Info";
import Interests from "../components/Interests";
import ProfInfo from "../components/ProfInfo";
import Password from "../components/Password";
const ProfilePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Heatmap />
      <Info />
      <ProfInfo />
      <Password />
      <Interests />
    </>
  );
};

export default ProfilePage;
