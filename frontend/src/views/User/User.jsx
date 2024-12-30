import { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { useStateContext } from "../../contexts/contextprovider";
import { FourSquare } from "react-loading-indicators";

const User = () => {
  const [loading, setLoading] = useState(true);

  const { user, setUser } = useStateContext();

  useEffect(() => {
    axiosClient
      .get("/me")
      .then(({ data }) => {
        setUser(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch user:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!loading && (
        <div>
          <h3>Welcome Back, Mr. {user.name}</h3>
          <br></br>
          <hr></hr>
          <br></br>
          <h1>Available School Bus</h1>
          <br></br>          
        </div>

      )}
      <div className="container_main">
              <div className="container_2">
                <h1>Sumudu School Bus</h1>
                <img
                    src="src/assets/bus2.jpg" 
                    alt="Sad girl bullied by others"
                    className="cart-image"
                    /><br></br>
                <button className="button"><span>Join Us </span></button>
              </div>
              <div className="container_2">
                <h1>Jayani School Bus</h1>
                <img
                    src="src/assets/bus2.jpg" 
                    alt="Sad girl bullied by others"
                    className="cart-image"
                    /><br></br>
                <button className="button"><span>Join Us </span></button>
              </div>
              <div className="container_2">
                <h1>Kumudu School Bus</h1>
                <img
                    src="src/assets/bus2.jpg" 
                    alt="Sad girl bullied by others"
                    className="cart-image"
                    /><br></br>
                <button className="button"><span>Join Us </span></button>
              </div>              
      </div>             
     
    </>
  );
};

export default User;
