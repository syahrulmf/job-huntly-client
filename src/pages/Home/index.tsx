import { useTypedDispatch, useTypedSelector } from "../../redux/app/hooks";
import { decrementCounter, incrementCounter } from "../../redux/counter/action";

import BannerSignUp from "../../components/organism/BannerSignUp";
import Category from "../../components/organism/Category";
import FeaturedJob from "../../components/organism/FeaturedJob";
import Hero from "../../components/organism/Hero";
import LatestJob from "../../components/organism/LatestJob";
import Testimoni from "../../components/organism/Testimoni";
import HomeTemplate from "../../components/templates/HomeTemplate";

import "./style.css";

export default function Home() {
  const { counter } = useTypedSelector((state) => state.counter);
  const dispatch = useTypedDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

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
