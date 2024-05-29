import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-stone-600 text-stone-200 text-xl ">
      <ul className="flex justify-end m-1 p-4">
        <Link to='/'>
          
          <li className="m-2 p-2 " >Home</li>
        </Link>
        <Link to='/about'>
        
          <li className="m-2 p-2  " >About</li>
        </Link>
        <Link to='/cart'>
        
          <li className="m-2 p-2 " >Cart-{0}</li>
        </Link>
        <Link to='/login'>
         
          <li className="m-2 p-2 " >Login</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
