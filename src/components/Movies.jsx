import "../styles/Products.css";
import TheGrinchPhoto from '../images/the_grinch_movie.jpg'
import { useNavigate } from "react-router-dom";
import HomeAlonePhoto from '../images/home_alone_movie.jpg'
import PolarExpressPhoto from '../images/polar_express_movie.jpg'
import ChristmasChronicles from '../images/christmas_chronicles_movie.jpg'


function Products() {

  const navigate = useNavigate()


  function GoToMovie1(){
    navigate("/thegrinch")
  }

  function GoToMovie2(){
    navigate("/homealone")
  }

  function GoToMovie3(){
    navigate("/polarexpress")
  }

  function GoToMovie4(){
    navigate("/christmaschronicles")
  }

  return (
    <>
      <div className="BodyProducts">
        <div className="Products">
          <h2 className="title">Top Christmas movies</h2>
          <div className="ProductsCard">
            <div className="start">
              <div className="firstmovie">
                <h2>The Grinch</h2>
                <img src={TheGrinchPhoto} alt="The Grinch" className="grinch-photo" onClick={GoToMovie1}/>

              </div>
              <div className="secondmovie">
                <h2>Home Alone</h2>
                <img src={HomeAlonePhoto} alt="Home Alone" className="home-alone-photo" onClick={GoToMovie2}/>
              </div>
              <div className="thirdmovie">
                <h2>The Polar Express</h2>
                <img src={PolarExpressPhoto} alt="Polar Express" className="polar-express-photo" onClick={GoToMovie3}/>
              </div>
              <div className="lastmovie">
                <h2>Christmas Chronicles</h2>
                <img src={ChristmasChronicles} alt="Christmas Chronicles" className="christmas-chronicles-photo" onClick={GoToMovie4}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
