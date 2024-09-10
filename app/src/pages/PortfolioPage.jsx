import bundleApp from '../assets/Power_Bundle.png';
import weatherApp from '../assets/WeatherApp.png';
import taskApp from '../assets/TaskApp.png';
import travelApp from '../assets/TravelApp.png';
// import '../style.css';

  export default function PortfolioPage() {
    const containerStyle = {
      position: 'relative',
      maxWidth: '100%',
      height: 'auto',
      overflow: 'hidden', // Ensures no overflow beyond image boundaries
    };

    const imageStyle = {
      width: '100%',
      height: 'auto',
      display: 'block',
      borderRadius: '10px'
    };

    const linkStyle1 = {
      position: 'absolute',
      top: '40%',  // Adjust to position the text correctly
      left: '20%', // Adjust to position the text correctly
      color: 'white',  // Text color
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color with transparency
      padding: '5px',
      textDecoration: 'none', // Remove underline
    };
  
    const linkStyle2 = {
      position: 'absolute',
      top: '40%',  // Adjust to position the text correctly
      left: '54%', // Adjust to position the text correctly
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '5px',
      textDecoration: 'none',
    };

    
    return (
      <div className="container pt-4">
      
        <section className="features-icons bg-light text-center m-4">
          <div className="container">
            <div className="row p-2">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                  <h3>Power Bundle Project</h3>
                  {/* <p className="lead mb-0"> */}
                    <div style={containerStyle} className="lead mb-0">
                      <img src={bundleApp} alt="personal image" useMap="#image-map" width="250" height="200" style={imageStyle}/>
                      <a href="https://github.com/Flo2009/Power_Bundle" target="_blank" rel="noopener noreferrer" style={linkStyle1}>
                        GitHub
                      </a>
                      <a href="https://power-bundle-gh9r.onrender.com/" target="_blank" rel="noopener noreferrer" style={linkStyle2}>
                        Web Page
                      </a>
                    </div>
                  {/* </p> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary" />
                  </div>
                  <h3>Weather App</h3>
                  {/* <p className="lead mb-0"> */}
                    <div style={containerStyle} className="lead mb-0"> 
                      <img src={weatherApp} alt="personal image" width="250" height="200" style={imageStyle}/>
                      <a href="https://github.com/Flo2009/Flo2009WeatherDashboard" target="_blank" rel="noopener noreferrer" style={linkStyle1}>
                        GitHub
                      </a>
                      <a href="https://flo2009.github.io/Flo2009WeatherDashboard/" target="_blank" rel="noopener noreferrer" style={linkStyle2}>
                        Web Page
                      </a>
                    </div>
                  {/* </p> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>
                  <h3>Task Manager</h3>
                  {/* <p className="lead mb-0"> */}
                    <div style={containerStyle} className="lead mb-0">   
                    <img src={taskApp} alt="personal image" width="250" height="200" style={imageStyle}/>
                      <a href="https://github.com/Flo2009/Task_Board_Kanban" target="_blank" rel="noopener noreferrer" style={linkStyle1}>
                        GitHub
                      </a>
                      <a href="https://flo2009.github.io/Task_Board_Kanban/" target="_blank" rel="noopener noreferrer" style={linkStyle2}>
                        Web Page
                      </a>
                    </div>  
                  {/* </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-icons bg-light text-center m-4">
          <div className="container">
            <div className="row p-2">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                  <h3>Travel App Project</h3>
                  {/* <p className="lead mb-0"> */}
                  <div style={containerStyle} className="lead mb-0"> 
                  <img src={travelApp} alt="personal image" width="250" height="200" style={imageStyle}/>
                  <a href="https://github.com/AshleydVon/TravelWise" target="_blank" rel="noopener noreferrer" style={linkStyle1}>
                      GitHub
                    </a>
                    <a href="https://ashleydvon.github.io/TravelWise/" target="_blank" rel="noopener noreferrer" style={linkStyle2}>
                      Web Page
                  </a>
                  </div>
                  {/* </p> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary" />
                  </div>
                  <h3>Project</h3>
                  <p className="lead mb-0">
                    Next Project Posting will be here!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>
                  <h3>Project</h3>
                  <p className="lead mb-0">
                    Next Project Posting will be here!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
       
      </div>
    );
  }
