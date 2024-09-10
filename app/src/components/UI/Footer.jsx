import '../../footer.css';

export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary navbar-footer navbar-bottom">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           {links.map((link) => link)}
           </ul>
         </div>
       </div>
    </nav> 
  );
}






{/* <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-footer navbar-bottom">
  <div className="container-fluid">
    <span className="navbar-text">
        &copy; 2024 Your Company. All rights reserved.
    </span>
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link" href="#">Privacy</a>
            {links.map((link) => link)}
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Terms</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
        </li>
    </ul>
  </div>
</nav> */}