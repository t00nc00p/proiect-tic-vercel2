import "../styles/TheGrinch.css";
import theGrinchPop from "../images/theGrinchPop.jpg";
import React, { useState } from "react";


function TheGrinch() {
  const [count, setCount] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  function handleShowVideo() {
    setShowVideo(true);
    setCount(count + 1);
  }

  return (
    <div className="moviebody">
      <div className="herotitle">
        <h1 className="movie-title">The Grinch movie</h1>
      </div>
      <p className="About-grinch">
        The Grinch este o poveste clasică de Crăciun inspirată din cartea pentru
        copii "How the Grinch Stole Christmas!" scrisă de Dr. Seuss. De-a lungul
        anilor, povestea a fost adaptată în mai multe formate: animații, filme
        și seriale. Grinch este o creatură cinică și morocănoasă care trăiește
        izolat pe un munte deasupra satului Whoville. Urăște Crăciunul și
        planifică să-l fure, furând cadourile și decorațiunile locuitorilor.
        Însă, după ce întâlnește o fetiță pe nume Cindy Lou Who și vede
        adevăratul spirit al sărbătorii, Grinch își schimbă inima și
        îmbrățișează Crăciunul.
      </p>
      <div className="herophoto">
        <img
          src={theGrinchPop}
          alt="TheGrinchPop"
          className="TheGrinchPop"
          onClick={handleShowVideo}
        />
      </div>
      <p className="count-display">{count}</p>
      {showVideo && (
        <video width="800" height="450" controls>
          <source src="../public/assets/The Grinch 2018 720p BluRay DD+5.1 x264-NyHD.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export default TheGrinch;
