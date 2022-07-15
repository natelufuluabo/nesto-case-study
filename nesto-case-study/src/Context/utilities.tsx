export interface AppContext {
    requestDetails? : {},
    customerInfo? : {},
    updateCustomerProfile? : (value : {}) => void,
    updateCustomerContact? : (value : {}) => void
}

export interface propsType {
    children : React.ReactNode
}