import React, { createContext, useState } from 'react';
import { AppContext, stateType, propsType } from './utilities';

export const newCustomerContext = createContext<AppContext>({});

export const NewCustomerProvider = ({ children } : propsType) => {
    const [requestInfo, setRequestInfo] = useState<stateType>({
        requestDetails : {},
        customerInfo : {}
    })
    return (
        <newCustomerContext.Provider
            value={{
                ...requestInfo, 
                updateCustomerProfile(value : {}) : void {
                    setRequestInfo({
                        ...requestInfo, ...value
                    })
                },
                updateContact(value : {}) {
                    setRequestInfo({
                        ...requestInfo, ...value
                    })
                }
            }}
        >
            {children}
        </newCustomerContext.Provider>
    )
}