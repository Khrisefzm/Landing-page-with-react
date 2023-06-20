import React from 'react';
const NavBar =() => {
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container col-lg-8">
            <a className="navbar-brand text-white" href="#">Start Bootstramp</a>
            <button className="navbar-toggler white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white-50" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white-50" href="#">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white-50">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}
export default NavBar;