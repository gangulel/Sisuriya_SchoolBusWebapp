import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/contextprovider";

const HomePage = () => {
  const navigate = useNavigate();
  const { token } = useStateContext();
  const handleLoginClick = () => {
    if (token) {
      navigate("/admin-dashboard");
    } else {
      navigate("/login");
    }
  };
  const handleRegisterClick = () => {
    if (token) {
      navigate("/user");
    } else {
      navigate("/register");
    }
  };
  return (
    <div className="HomePage">
      <header className="header">
        <div className="logo"> Sisuriya</div>
        <nav className="nav">
          <button className="nav-button" onClick={handleLoginClick}>
            login
          </button>
          <button className="nav-button" onClick={handleRegisterClick}>
            Register
          </button>
        </nav>
      </header>
      <div className="container">
          <div className="box1">
          <h1 className="heding_text1">Welcome to Sisuriya</h1>
          <h3 className="heding_text2">Bus Service Dedicated For School Children</h3>
          <p>Launched in 2005, Sisu Sariya is a centralized, reliable and concessionary bus service combining the services of SLTB depots and registered private bus service providers. There are at present 778 buses in service.</p>
          <br></br>
          <p>Strict safety measures are followed in maintenance and operation of the buses. With punctuality in mind, the service provides timely travel to school and back. The bus will arrive at the school 15 minutes before start of school and arrive at school before closing of school to pickup students. Education is a child’s right. By making available low-cost transport, the Sisu Sariya Bus Service offers concessionary charges, encouraging parents to send their children to school, by providing families with economic relief.</p>
          <p className="para1">Get More Information :-<a href="https://ntc.gov.lk/Services/sisu_seriya.php">National Transport Commission</a></p>
          </div>
          <div className="box">
              <div>
                <img
                src="src/assets/num2.jpg" 
                alt="Sad girl bullied by others"
                className="hero-image"
                />
              </div>
          </div>
      </div>
      <div className="container">
          <div className="box2">
                <div>
                  <img
                  src="src/assets/student.jpg" 
                  alt="Sad girl bullied by others"
                  className="hero-image"
                  />
                </div>
          </div>
          <div className="box12">
          <h1 className="heding_text1">About Us</h1>
          <h3 className="heding_text2">Bus Service Dedicated For School Children</h3>
          <p>The National Transport Commission considers safety and reliability to be important. Hence strict monitoring of the service is carried out on a continuous basis to check that high standards in quality of service is maintained. For this purpose, for each bus, a free ticket will be issued for a named teacher/senior student, who will monitor services provided. A seven member committee from each school, comprising of the school Principle/Deputy Principle, Teacher, Supervising teachers, Two (2) senior teachers and Two (2) parents of school development committee, will monitor the service and attend to the needs arising for the specific service buses allocated to the school. Payments are made only if busses pass a reliability of at least 90%. The Government has allocated a sum of Rs.240 mn for this project as of January 2011.</p>
          <br></br>
          </div>
          
      </div>
      <footer className="footer">
        <p>&copy; 2024 Sisuriya Bus Service. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
