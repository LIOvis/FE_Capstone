import Carousel from "../Carousel";
import mercuryIcon from "/mercury-favicon.svg";

export default function Home() {
  return (
    <div className="home-page-wrapper page-wrapper">
      <div className="hero-title">MERX</div>
      <Carousel />
      <div className="hero-slogan-about">
        <p className="hero-slogan">From Ancient Times to Interstellar</p>
        <p className="hero-about">
          At Merx, commerce is more than trade — it’s transformation. Inspired
          by the bustling markets of ancient Rome, the boundless mysteries of
          space, and the timeless art of alchemy, we bring you a marketplace
          where the ordinary becomes extraordinary. Each product is a
          constellation in our cosmos, carefully chosen to turn everyday life
          into something golden. Step into Merx, where history, stars, and
          science converge — and transform your future.
        </p>
      </div>
      <div className="hero-icon-wrapper">
        <p className="hero-icon-title">The Alchemical Symbol for Mercury</p>
        <p className="hero-icon-about">
          “The alchemical element took its name from the wandering planet,
          itself dedicated to the swift Roman god Mercury—whose very name was
          born of the Latin <em>merx</em>, commerce. From this single word flows
          a legacy: trade as alchemy, exchange as orbit, and commerce itself as
          a force written across both empire and stars.”
        </p>
        <img className="hero-icon" src={mercuryIcon} />
      </div>
    </div>
  );
}
