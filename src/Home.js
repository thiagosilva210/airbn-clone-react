import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
          title="cljdflsjfl"
          description="Comfortable private places, with room for friends and family"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320"
          title="cljdflsjfl"
          description="Comfortable private places, with room for friends and family"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320"
          title="cljdflsjfl"
          description="Comfortable private places, with room for friends and family"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
          title="cljdflsjfl"
          description="Comfortable private places, with room for friends and family"
          price="$500/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320"
          title="cljdflsjfl"
          description="Comfortable private places, with room for friends and family"
          price="$500/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320"
          title="cljdflsjfl"
          description="Comfortable private places, with room for friends and family"
          price="$500/night"
        />
      </div>
    </div>
  );
}

export default Home;
