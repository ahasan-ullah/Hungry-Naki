import storyImage from "../../../assets/our-story.jpg";
const OurStory = () => {
  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold text-center mb-5">Our Story</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="space-y-5 md:w-1/2">
            <img src={storyImage} className="rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-xl font-semibold">
              Delicious Food, Friendly Staff, Good Atmosphere & Positive
              Emotions
            </h1>
            <p className="py-6">
              Our story is one of passion, persistence, and purpose. From humble
              beginnings to boundless ambitions, we've embarked on a journey
              fueled by dreams, guided by values, and shaped by the people we
              serve. Together, we've built a legacy rooted in innovation,
              growth, and unwavering dedication to making a difference. This is
              more than a story—it's a testament to what we can achieve
              together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
