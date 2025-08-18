import Licorice from "../../assets/images/licorice.jpg";

export default function About() {
  return (
    <div className="about-page-wrapper page-wrapper">
      <h1 className="about-page-title">About</h1>
      <div className="about-wrapper">
        <h2 className="about-title">Final Thoughts</h2>
        <p className="about-content">
          One of the most rewarding parts of this project has been the process
          of learning itself. Each new challenge was an opportunity to pick up a
          skill I hadn’t used before, and instead of feeling like an obstacle,
          it became something exciting to work through. The trial and error, the
          small breakthroughs, and even the frustrations all added up to a
          deeper understanding that made the journey worthwhile. Beyond just
          building something functional, there was real joy in shaping a concept
          I personally connected with—transforming an idea I liked into
          something tangible. That balance of discovery and creativity made the
          experience both fun and fulfilling - something I find both rare and
          deeply meaningful.
        </p>
      </div>
      <div className="tribute-wrapper">
        <h2 className="tribute-title">In Loving Memory</h2>
        <div className="tribute-image-text-wrapper">
          <img src={Licorice} className="licorice-image" />
          <div className="tribute-content-wrapper">
            <p className="tribute-content">
              Licorice Roy passed away on August 12, 2025, during the period in
              which I was completing this capstone. She was a gentle and
              steadfast companion, always offering comfort to her family through
              quiet presence, affectionate cuddles, or playful nips, even as age
              made movement increasingly difficult. In her youth, running and
              barking brought her great joy, though these became harder with
              time. I hold with certainty that wherever Licorice is now, she has
              regained the freedom to run and bark once more, carrying forward
              the same joy and spirit that defined her life.
            </p>
            <p className="tribute-quote">
              <em>"Run free, angel dog"</em> - Susan Roy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
