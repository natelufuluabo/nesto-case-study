import React, { useState } from 'react';
import { handleProductShowing } from '../Utilities/RatePageUtilities';

const RatePage : React.FC = () => {
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(!showMore);
    }

    const productRendering = handleProductShowing(showMore);

    return (
        <section className="rate-page-container">
          <h1>Nesto Mortgage Rates</h1>
          <div className="rates-container">
            <div className="top-row">
              <div className='term'><span className="term-word">Term</span></div>
              <div className="rate-type"><span className="fixed-word">Fixed</span></div>
            </div>
            <div className="rate-options">
              {productRendering}
            </div>
            <div className="bottom-row">
              <button onClick={handleClick} className='showMore'>
                {showMore ? 'Show Less' : 'Show More'} 
              </button>
            </div>
          </div>
        </section>
    )
}

export default RatePage;