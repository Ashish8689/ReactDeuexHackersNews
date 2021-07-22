import React from 'react'
import {Link} from 'react-router-dom';

function NavigationLinks({ button: { id, type }, HandleSetArray, Storytype }) {

  return (

    <Link
      to={`/${type}`}
      className={id === Storytype ? "button active" : "button"}
      onClick={() => HandleSetArray(id)}
    >
      {type}
    </Link>

  );
}

export default NavigationLinks
