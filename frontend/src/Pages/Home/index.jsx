import "./style.css";
import Carousel from "../../Components/Corousel";
import { useCorousel } from "../../Hooks/corousel";
const Home = () => {
  const { items } = useCorousel();
  return <Carousel name={items} />;
};

export default Home;
