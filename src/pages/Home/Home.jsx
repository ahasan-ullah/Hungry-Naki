import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import OurStory from "./OurStory/OurStory";
import Reviews from "./Reviews/Reviews";
import TopFood from "./TopFood/TopFood";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Top food section */}
      <TopFood></TopFood>
      {/* Our story section */}
      <OurStory></OurStory>
      {/* Reviews Section */}
      <Reviews></Reviews>
      {/* Contact Us Section */}
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;