import React from "react";
import { Link } from 'react-router-dom';
import { newCustomerContext } from "../Context/NewCustomerContext";

interface propsType {
    path : string,
    description : string,
    requestType : string
}

const RequestCard = ({ path, description, requestType } : propsType) => {
    return (
        <Link 
            key= {requestType} 
            to={path}
        >
            <div className="request-container">
                <span className="request-type">{requestType}</span>
                <span className="request-description">{description}</span>
            </div>
        </Link>
    )
}

export default RequestCard;