import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import OurStory from "./OurStory/OurStory";
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
      {/* Contact Us Section */}
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;