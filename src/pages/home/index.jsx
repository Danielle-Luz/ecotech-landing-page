import CallToAction from "../../components/call-to-action";
import Header from "../../components/header";
import Products from "../../components/products";
import Results from "../../components/results";
import Testimonials from "../../components/testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <CallToAction />
      <Results />
      <Products />
      <Testimonials />
    </>
  )
};

export default Home;