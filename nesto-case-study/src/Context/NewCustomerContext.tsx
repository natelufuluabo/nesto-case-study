import React, { createContext, useState } from 'react';
import { AppContext, propsType } from './utilities';

export const newCustomerContext = createContext<AppContext>({});

export const NewCustomerProvider = ({ children } : propsType) => {
    const [requestDetails, setRequestDetails] = useState({})
    const [customerInfo, setCustomerInfo] = useState({})
    return (
        <newCustomerContext.Provider
            value={{
                ...requestDetails,
                ...customerInfo,
                updateCustomerProfile(value : {}) : void {
                    setRequestDetails({ ...requestDetails, ...value })
                },
                updateCustomerContact(value : {}) : void {
                    setCustomerInfo({ ...customerInfo, ...value })
                }
            }}
        >
            {children}
        </newCustomerContext.Provider>
    )
}