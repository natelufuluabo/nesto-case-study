import React from 'react';
import RateChoiceComponent from '../Components/RateChoiceComponent';
import productInfosEn from '../Utilities/ProductInfosEn';
import { v4 as uuidv4 } from 'uuid';

export const handleProductShowing = (value : boolean) => {
    if (value) {
        return (
            productInfosEn.map(product => 
                <RateChoiceComponent 
                    key={uuidv4()}
                    termLength = {product.termLength}
                    rate = {product.rate}
                    provider = {product.provider}
                />
            )
        )
    } else {
        return (
            (productInfosEn.filter(productX => productX.id === 'main')).map(
                product => 
                <RateChoiceComponent
                    key={uuidv4()} 
                    termLength = {product.termLength}
                    rate = {product.rate}
                    provider = {product.provider}
                />
            )
        )
    }
}