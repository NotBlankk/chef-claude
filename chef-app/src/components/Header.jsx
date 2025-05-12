import React from "react";
import chefImage from '../assets/chef-img.png'

export default function Header(){
    return(
        <div className="headerComponent">
        <img src={chefImage} alt="Chef Image" />    
        <h1>Chef Claude</h1>

        </div>

    )
}