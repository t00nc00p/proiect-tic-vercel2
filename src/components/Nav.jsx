import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function Nav() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const email = Cookies.get("email");
    const password = Cookies.get("password");

    if (email && password) {
      validateLogin(email, password);
    }
  }, []);

  async function validateLogin(email, password) {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.name) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error validating login:", error);
      setIsAuthenticated(false);
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="options">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="account">
          <ul>
            {!isAuthenticated ? (
              <li>
                <Link to="/login">LogIn</Link>
              </li>
            ) : (
              <div  className="logout">
                <li>
                  <Link
                    onClick={() => {
                      Cookies.remove("email");
                      Cookies.remove("password");
                      setIsAuthenticated(false);
                    }}
                  >
                    LogOut
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
