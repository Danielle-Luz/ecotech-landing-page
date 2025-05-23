import CallToAction from "../../components/call-to-action";
import EconomyForm from "../../components/economy-form";
import Footer from "../../components/footer";
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
      <EconomyForm />
      <Footer />
    </>
  )
};

export default Home;