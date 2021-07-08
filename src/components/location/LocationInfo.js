import React from "react"
import "./location.css"

export const LocationInfo = ({ location }) => (
    <section className="location">
        <h3 className="location__address">{location.address}</h3>
        <address className="candy__name">{location.candy.name}</address>
    </section>
)
