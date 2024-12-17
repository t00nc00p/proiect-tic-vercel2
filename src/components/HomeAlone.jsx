import "../styles/HomeAlone.css";
import React, { useState } from "react";
import HomeAlonePop from "../images/HomeAlonePop.jpg";


function HomeAlone() {
  const [count, setCount] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  function handleShowVideo() {
    setShowVideo(true);
    setCount(count + 1);
  }

  return (
    <div className="moviebody">
      <div className="herotitle">
        <h1 className="movie-title">Home Alone Movie</h1>
      </div>
      <p className="About-HomeAlone">
        "Home Alone" spune povestea lui Kevin McCallister, un băiat de 8 ani
        care este uitat acasă de familia sa atunci când pleacă în vacanța de
        Crăciun. Singur acasă, Kevin trebuie să-și protejeze locuința de doi
        hoți incompetenți, Harry și Marv, care încearcă să spargă casa familiei.
        În același timp, Kevin învață lecții importante despre responsabilitate
        și dragostea de familie.
      </p>
      <div className="herophoto">
        <img
          src={HomeAlonePop}
          alt="HomeAlonePop"
          className="HomeAlonePop"
          onClick={handleShowVideo}
        />
      </div>
      <p className="count-display">{count}</p>
      {showVideo && (
        <video width="800" height="450" controls>
          <source src="../public/assets/Home.Alone.1990.720p.WEBRip.DD5.1.x264-PTer.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export default HomeAlone;
