import React from 'react'
import {Link, useLocation} from 'react-router-dom';

function NavigationLinks({ button: { storytype } }) {
  
  const type = useLocation();
  return (
    <Link
      to={`/${storytype}`}
      className={type.pathname.slice(1) === storytype ? "button active" : "button"}
    >
      {storytype}
    </Link>
  );
}

export default NavigationLinks
