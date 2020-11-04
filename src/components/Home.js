import React from "react";
import '../App.scss';
import Example from './Home/Carousel'

const Home = () => {

  return (
    <div className="home-content style-2">
      <div className="slideshow">
        <div className="overlay" />
        <div className="slide-text">
          <h1>welcome to Flix +</h1>
          <p>join the community TMDb</p>
        </div>
      </div>
      <Example />
      <div className="home-inner-content">
        <h3>Lets talk about TMDb</h3>
        <p>
          The Movie Database (TMDb) is a community built movie and TV database.
          Every piece of data has been added by our amazing community dating
          back to 2008. TMDb's strong international focus and breadth of data is
          largely unmatched and something we're incredibly proud of. Put simply,
          we live and breathe community and that's precisely what makes us
          different.
        </p>
      </div>
      <ul className="home-grid">
        <div className="home-inner-content">
          <h3>The TMDb Advantage</h3>
        </div>
        <li className="grid-paragraph">
          Every year since 2008, the number of contributions to our database has
          increased. With over 125,000 developers and companies using our
          platform, TMDb has become a premiere source for metadata.
        </li>
        <li className="grid-paragraph">
          Along with extensive metadata for movies, TV shows and people, we also
          offer one of the best selections of high resolution posters and
          fanart. On average, over 1,000 images are added every single day.
        </li>
        <li className="grid-paragraph">
          We're international. While we officially support 39 languages we also
          have extensive regional data. Every single day TMDb is used in over
          180 countries.
        </li>
        <li className="grid-paragraph">
          Our community is second to none. Between our staff and community
          moderators, we're always here to help. We're passionate about making
          sure your experience on TMDb is nothing short of amazing.
        </li>
        <li className="grid-paragraph">
          Trusted platform. Every single day our service is used by millions of
          people while we process over 2 billion requests. We've proven for
          years that this is a service that can be trusted and relied on.
        </li>
      </ul>
      <ul className="home-grid">
        <li className="grid-paragraph stat">
          <strong>359,837</strong> Movies
        </li>
        <li className="grid-paragraph stat">
          <strong>69,972</strong> TV Shows
        </li>
        <li className="grid-paragraph stat">
          <strong>1,009,222</strong> People
        </li>
        <li className="grid-paragraph stat">
          <strong>1,708,600</strong> Images
        </li>
        <li className="grid-paragraph stat">
          <strong>125,897</strong> Edits Last Week
        </li>
      </ul>
    </div>
  );
};

export default Home;
