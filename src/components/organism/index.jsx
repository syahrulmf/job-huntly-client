import Category from "../../components/organism/Category";
import Hero from "../../components/organism/Hero";
import Testimoni from "../../components/organism/Testimoni";
import HomeTemplate from "../../components/templates/HomeTemplates";

export default function Home() {
  return (
    <HomeTemplate>
      <Hero />
      <Testimoni />
      <Category />
    </HomeTemplate>
  );
}
