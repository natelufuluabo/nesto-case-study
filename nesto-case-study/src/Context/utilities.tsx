export interface AppContext {
    requestDetails? : {},
    customerInfo? : {},
    updateCustomerProfile? : (value : {}) => void,
    updateContact? : (value : {}) => void
}

export interface stateType {
    requestDetails : {},
    customerInfo : {},
}

export interface propsType {
    children : React.ReactNode
}