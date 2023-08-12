import BannerSignUp from "../../components/organism/BannerSignUp";
import Category from "../../components/organism/Category";
import FeaturedJob from "../../components/organism/FeaturedJob";
import Hero from "../../components/organism/Hero";
import LatestJob from "../../components/organism/LatestJob";
import Testimoni from "../../components/organism/Testimoni";
import HomeTemplate from "../../components/templates/HomeTemplate";

import "./style.css";

export default function Home() {
  return (
    <HomeTemplate>
      <Hero />
      <Testimoni />
      <Category />
      <BannerSignUp />
      <FeaturedJob />
      <LatestJob />
    </HomeTemplate>
  );
}
