import React from 'react'
// import {Link, useLocation} from 'react-router-dom';

// function NavigationLinks({type,link }) {
function NavigationLinks({ button: { id, type }, HandleSetArray,Storytype}) {
  // const location = useLocation();

  return (
    // <Link to={link} className={location.pathname === link ? "button active" : "button" }>
    //    {type}
    // </Link>
    <div>
      <button className={Storytype === id ? "button active" : "button"} onClick={() => HandleSetArray(id)}>{type}</button>
    </div>
  );
}

export default NavigationLinks
