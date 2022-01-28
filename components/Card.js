import React from "react"

export default function Card(props) {
     
    return (
        <div className="card">
            <div className="card--container">
            <div className="card--img">
            <img src={`../images/${props.item.imageUrl}`} className="card--image"/>
            </div>
            
            <div className="card--info">
                <ion-icon name="location"></ion-icon>
                <span className="card--location">{props.item.location}</span> 
                <a href="{props.item.googleMapsUrl}"><span className="card--url">View on Google Maps</span></a>
            
            <h1 className="card--title">{props.item.title}</h1>
            <h4 className="card--date">{props.item.startDate} - {props.item.endDate}</h4>
            <p className="card--text">{props.item.description}</p>
            </div>
            </div>
        </div>
        
        
    )
}