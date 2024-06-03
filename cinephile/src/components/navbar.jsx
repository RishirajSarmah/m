import React from "react";
import { Link } from "react-router-dom";


function Navbar () {
  return (
    <>
    <nav className="d-block p-2 text-bg-primary " data-bs-theme="dark">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <div className="btn btn-dark" >
        <Link to = "/cinephile/signup" class="text-decoration-none">SIGN UP</Link>
         
          </div>
        
        
      </div> 
    </nav>
       </>
  );
}

export default Navbar;
