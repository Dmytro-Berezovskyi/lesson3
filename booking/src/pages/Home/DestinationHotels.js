import PropTypes from "prop-types";

import { Col, Divider, Row } from "antd";

import {NavLink} from "react-router-dom";

export default function DestinationHotels({ selectedHotels }) {
    //if (!selectedHotels || selectedHotels.length === 0) {
    //    return <p style={{width: "60%"}}>
    //                Plan&Stay is a modern booking platform dedicated to making travel planning seamless and stress-free.
    //                Whether you're looking for a cozy getaway, a luxurious retreat, or a budget-friendly option, we
    //                bring
    //                you a curated selection of accommodations tailored to your preferences. With intuitive tools and
    //                personalized recommendations, Plan&Stay ensures your next adventure starts with the perfect booking.
    //            </p>
    //}

    return (
        <>
            {!selectedHotels || selectedHotels.length === 0 ? (
                <p style={{width: "60%"}}>
                    Plan&Stay is a modern booking platform dedicated to making travel planning seamless and stress-free.
                    Whether you're looking for a cozy getaway, a luxurious retreat, or a budget-friendly option, we
                    bring
                    you a curated selection of accommodations tailored to your preferences. With intuitive tools and
                    personalized recommendations, Plan&Stay ensures your next adventure starts with the perfect booking.
                </p>
            ): (
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <h4 style={{marginLeft: "4%", color: "rgba(0,0,0,0.50)"}}>All hotels at your request</h4>
                    <Row justify="space-around" style={{width: "100%", gap: "10px"}}>
                        {selectedHotels.map((hotel) => {
                            return <Col span={6} key={hotel.id}>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <NavLink to={`/hotel/${hotel.id}`}>
                                        <div style={{background: "grey", height: "150px"}}>
                                            <img
                                                src={hotel.photo} alt="hotel photo"
                                                style={{width: "100%", height: "100%", objectFit: "cover"}}
                                            />
                                        </div>
                                        <h3>{hotel.name}</h3>
                                    </NavLink>
                                    <span>City: {hotel.city}</span>
                                    <span>Address: {hotel.address}</span>
                                </div>
                                <Divider style={{borderWidth: "3px"}}/>
                            </Col>
                        })}
                    </Row>
                </div>
            )}
        </>

    )
}

DestinationHotels.propTypes = {
    selectedHotels: PropTypes.array.isRequired,
}