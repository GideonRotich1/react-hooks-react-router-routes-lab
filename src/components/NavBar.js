import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return ( 
    <nav>
  <div>
<NavLink to ="/" activeClassName="activeLink">Home</NavLink>
<NavLink to ="/movies" activeClassName="activeLink">Movies</NavLink>
<NavLink to ="/directors" activeClassName="activeLink"> Directors</NavLink>
<NavLink to ="/actors" activeClassName="activeLink" >Actors</NavLink>
</div>
 </nav>
);
}

export default NavBar;
