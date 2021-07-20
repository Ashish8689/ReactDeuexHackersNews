import React from 'react'
import {Link, useLocation} from 'react-router-dom';

function NavigationLinks({type,link}) {

    const location = useLocation();

    return (
        <Link to={link} className={location.pathname === link ? "button active" : "button" }>
           {type}
        </Link>
        
    )
}

export default NavigationLinks
