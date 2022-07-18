import React from "react";
import nestoLogo from '../Assets/nesto-logo.webp';
import { Link } from 'react-router-dom';

interface propsType {
    termLength : string,
    rate : string,
    provider : string
}

const RateChoiceComponent = ({ termLength, rate, provider } : propsType) => {
    return (
        <div className="main-container-rate">
            <div className="term-length-container">
                <h3 className='term-length'>{termLength}</h3>
            </div>
            <div className="product-details-container">
                <div className="product-details">
                    <h3 className="rate"><strong>{rate}%</strong></h3>
                    <img alt="Nesto-Logo" width={'70px'} src={nestoLogo} />
                    <h3 className="rate-provider">{provider}</h3>
                </div>
                <Link to='/getaquote'>
                    <button className="get-rate-button get-rate-container">Get this rate</button>
                </Link>
            </div>
        </div>
    )
}

export default RateChoiceComponent;