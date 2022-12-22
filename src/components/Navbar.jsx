import React from "react";
import { GiEarthAmerica } from 'react-icons/gi';

export default function Navbar (){
    return(
        <nav>
            <GiEarthAmerica className="nav--icon"/>
            <h3 className="nav--text">my travel journal.</h3>
        </nav>
    )
}