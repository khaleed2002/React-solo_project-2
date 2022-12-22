import React from "react";
import splash from '../splash.jpeg'
import {MdLocationOn} from 'react-icons/md'
export default function Travel (params){
    console.log(params.item)
    return(
        <div className="travel-box">
            <img src={params.item.imageUrl} alt="splash" className="travel-box--img" />
            <div className="travel-box--text">
                <div className="travel-box--location">
                    <MdLocationOn className="travel-box--locationIcon"/>
                    <p className="travel-box--locationText">{params.item.location}</p>
                    <a href={params.item.googleMapsUrl} className="travel-box--locationLink">View in Google Maps</a>
                </div>
                <h2 className="travel-box--locationName">{params.item.title}</h2>
                <p className="travel-box--date">{params.item.startDate} - {params.item.endDate}</p>
                <p className="travel-box--description">{params.item.description}</p>
            </div>

        </div>
    )
}