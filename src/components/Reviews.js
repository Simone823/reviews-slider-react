// use state use effect react
import React, {useState, useEffect} from 'react';

// reviews component
function Reviews() {
    // reviews data
    const reviewsData = require('../reviews.json');

    // reviews use state
    const [reviews] = useState(reviewsData);

    return (
        <div className='container py-4'>
            
            {/* row 1 */}
            <div className='row justify-content-center mb-4'>
                <div className='col-12 text-center'>
                    <h1>Reviews</h1>
                </div>
            </div>

            {/* row 2 */}
            <div className='row'>
                <div className='col-12'>
                    {/* reviews map */}
                    {reviews.length ? (
                        reviews.map((review) => {
                            return (
                                // card
                                <div className='card bg-dark shadow-lg py-3 px-3' key={review.id}>
                                    <h3>{review.autore}</h3>
                                    <p>{review.recensione}</p>
                                    <p>{review.voto}</p>
                                </div>
                            )
                        })
                    ) : <h4>Nessuna recensione</h4>}
                </div>
            </div>
        </div>
    )
}

// export reviews
export default Reviews