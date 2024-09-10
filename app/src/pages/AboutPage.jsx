import imageName from '../assets/IMG_0180.jpeg';
import '../style.css';
// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
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
                <img src={imageName} alt="personal image" width="250" height="300" className='image'/>
              </div>
            </div>
           
            <div className="col-lg">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Who am I?</h3>
                <span>Hey there, I am Florian!</span>
                <span><br />I am a Sports Enthusiast and Mechanical Engineer</span>
                <span><br />on my way to be a</span><span> Developer!</span>
                <p> I am always curious to learn new ways to execute things. I have decided that I take one of my passions, creating Software, 
                    to another level by joining the Columbia Software Development Bootcamp!
                </p>
                <p>
                    I have a BS in Mechanical Engineering and a Masters in Businees Administration (MBA)
                </p>
                <p>
                    I love being around my family. As an Ultra-Marathon Runner and Triathlete I am also very passionate to be outside. 
                    I am always learning, exploring and surging to make processes more efficient and easier to follow.
                    I love to work with different kind of people/cultures and learn from them and their experience.
                    Feel free to reach out to me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>  
          
      
      
      
    </div>
  );
}
