// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Footer from './UI/Footer';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Footer
      links={[
        <Link key={1} className="nav-link text-light" to="https://github.com/Flo2009">
          GitHub
        </Link>,
        <Link key={2} className="nav-link text-light" to="https://www.linkedin.com/in/florian-suess-74a0b4121">
          LinkedIn
        </Link>,
         <Link key={3} className="nav-link text-light" to="https://www.strava.com/athletes/20380397">
         Strava
       </Link>,
        
      ]}
    />
  );
}
