import "../styles/ChristmasChronicles.css";
import React, { useState } from "react";
import ChristmasChroniclesPop from "../images/ChristmasChroniclesPop.jpg";


function ChristmasChronicles() {
  const [count, setCount] = useState(0);
  const [showVideo, setShowVideo] = useState(false)


  function handleShowVideo(){
    setShowVideo(true)
    setCount(count + 1)
  }
  

  return (
    <div className="moviebody">
      <div className="herotitle">
        <h1 className="movie-title">Christmas Chronicles Movie</h1>
      </div>
      <p className="About-ChristmasChronicles">
        "The Christmas Chronicles" spune povestea a doi frați, Kate și Teddy
        Pierce, care încearcă să prindă un videoclip cu Moș Crăciun în Ajunul
        Crăciunului. Însă, lucrurile nu merg conform planului, iar ei ajung să
        provoace o serie de evenimente haotice, inclusiv să-l facă pe Moș
        Crăciun să cadă din sanie și să piardă sacul cu cadouri. Împreună cu Moș
        Crăciun, cei doi frați pornesc într-o aventură pentru a salva Crăciunul
        și a aduce darurile la timp. Pe parcurs, frații învață despre importanța
        familiei, a bunătății și a spiritului sărbătorilor.
      </p>
      <div className="herophoto">
        <img
          src={ChristmasChroniclesPop}
          alt="ChristmasChroniclesPop"
          className="ChristmasChroniclesPop"
          onClick={handleShowVideo}
        />
      </div>
      <p className="count-display">{count}</p>
      {showVideo && (
          <video width="800" height="450" controls>
            <source src="../public/assets/The.Christmas.Chronicles.2018.1080p.NF.WEB-DL.DD+5.1.Atmos.H.264-playWEB.mp4" type="video/mp4" />
          </video>
      )}
    </div>
  );
}

export default ChristmasChronicles;
