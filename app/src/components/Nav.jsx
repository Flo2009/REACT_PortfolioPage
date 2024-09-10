// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  const location = useLocation();
  // console.log(location.pathname);
  const isActive=location.pathname;
  return (
    <Navbar
      links={[
        <Link key={1} className={isActive==='/' ? 'nav-link active text-dark' : 'nav-link text-light'} to="/">
          About Me
        </Link>,
        <Link key={2} className={isActive==='/portfolio' ? 'nav-link active text-dark' : 'nav-link text-light'} to="/portfolio">
          Portfolio
        </Link>,
         <Link key={3} className={isActive==='/contact' ? 'nav-link active text-dark' : 'nav-link text-light'} to="/contact">
         Contact
       </Link>,
        <Link key={4} className={isActive==='/resume' ? 'nav-link active text-dark' : 'nav-link text-light'}to="/resume">
        Resume
      </Link>,
      ]}
    />
  );
}
