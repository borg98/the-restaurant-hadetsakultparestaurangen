import "../style/_HomePage.scss";

const HomePage = () => {
  return (
    <div>
      <div className="video-home-container">
        <video autoPlay loop muted className="background-video">
          <source src="/141578 (720p).mp4" type="video/mp4" />
        </video>
        <div className="home-content">
          <div className="home-content__title-container">
            <h1>Welcome to Lunar Delights.</h1>
            <div className="text">
              the first and only restaurant located on the surface of the moon.
            </div>
          </div>
        </div>
      </div>
      <div className="landing-section">
        <div className="container-lunardelights">
          <div className="content-lunardelights">
            <div className="content-lunardelights__text">
              <h2> Lunar Delights</h2>
              <p>
                Here, you can enjoy a dining experience that is out of this
                world. With panoramic views of Earth in all its glory, Lunar
                Delights offers a unique culinary journey that combines
                traditional flavors with futuristic innovation. Our renowned
                interstellar chefs use local moon ingredients to create
                extraordinary dishes that promise to exceed all expectations.
                <br />
                <br />
                Each table at our exclusive establishment provides an
                unparalleled view of the surrounding lunar landscape, where the
                moon's majestic silence is only broken by the sound of falling
                stars. Where starry nights take on a whole new meaning, our
                guests can choose between one of our luxurious domes, offering
                an intimate atmosphere protected from the moon's extreme
                conditions, or our open terraces, dressed in spacesuits, for
                those who wish for a more adventurous dinner under the bare moon
                sky.
                <br />
                <br />
                Booking at Lunar Delights is a journey in itself. Travelers can
                plan their trip through our interplanetary booking service,
                which includes exclusive transportation from Earth to the moon,
                where every detail of your journey and dinner is customized to
                fit your desires. Whether it's a romantic dinner for two, a
                business meeting that spans the solar system, or a family dinner
                that literally takes you to new heights, we guarantee an
                experience that will be a memory for life.
                <br />
                <br />
                At Lunar Delights, our mission is not just to serve a meal, but
                to create a moment in time and space where food, environment,
                and magnificent views intertwine to create magic. Book your
                table today and be part of the ultimate dining experience that
                surpasses gravity.
              </p>
            </div>
            <div className="home-lunar-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
