import React from "react";
import detailsEn from '../../Utilities/RequestDetailsEn';
import RequestCard from "../../Components/RequestCard";

const [newMortgage, renewal, refinance] = detailsEn;

const GetAQuotePage = () => {
    return (
        <div className="getaquote-container">
            <section className="main-container">
                <h3 className="page-main-heading">How can we help you with your mortgage?</h3>
                <nav className="container-request">
                    <RequestCard
                        requestType = {newMortgage.request}
                        description = {newMortgage.description}
                        path = {newMortgage.path}
                    />
                    <RequestCard
                        requestType = {renewal.request}
                        description = {renewal.description}
                        path = {renewal.path}
                    />
                    <RequestCard
                        requestType = {refinance.request}
                        description = {refinance.description}
                        path = {refinance.path}
                    />
                </nav>
            </section>
        </div>
    )
}

export default GetAQuotePage;