// use state use effect react
import React, {useState, useEffect} from 'react';

// reviews component
function Reviews() {
    // reviews data
    const reviewsData = require('../reviews.json');

    // reviews use state
    const [reviews] = useState(reviewsData);

    // active review
    const [activeReview, setActiveReview] = useState(0);

    // next review
    const nextReview = () => (e) => {
        // set activeReview
        setActiveReview((activeReview) => {
            if(activeReview + 1 === reviews.length) {
                return 0;
            } else {
                return activeReview + 1;
            }
        });
    }

    // use effect activeReview set timeout
    useEffect(() => {
        // timer
        const timer = setTimeout(() => {
            // set activeReview
            setActiveReview((activeReview) => {
                if(activeReview + 1 === reviews.length) {
                    return 0;
                } else {
                    return activeReview + 1;
                }
            });
        }, 5000);

        // clear timer
        return () => clearTimeout(timer);
    }, [activeReview]);

    // prev review
    const prevReview = () => (e) => {
        // set activeReview
        setActiveReview((activeReview) => {
            if(activeReview - 1 === -1) {
                return reviews.length - 1;
            } else {
                return activeReview - 1;
            }
        });
    }

    return (
        <div className='container py-4'>
            
            {/* row 1 */}
            <div className='row justify-content-center mb-4'>
                <div className='col-12 text-center'>
                    <h1>Reviews</h1>
                </div>
            </div>

            {/* row 2 */}
            <div className='row justify-content-center mb-4'>
                <div className='col-12 col-md-6'>
                    {/* reviews map */}
                    {reviews.length ? (
                        reviews.map((review, index) => {
                            return (
                                // card
                                <div className={`card bg-dark shadow-lg py-3 px-3 ${activeReview === index ? 'd-block' : 'd-none'}`} key={review.id}>
                                    <h3>{review.autore}</h3>
                                    <p>{review.recensione}</p>
                                    <p>{review.voto}</p>
                                </div>
                            )
                        })
                    ) : <h4>Nessuna recensione</h4>}
                </div>
            </div>

            {/* row 3 */}
            <div className='row justify-content-center'>
                <div className='col-12 col-md-6 d-flex -align-items-center justify-content-between'>
                    <button onClick={prevReview()} type='button' className='btn btn-info'>Prev</button>
                    <button onClick={nextReview()} type='button' className='btn btn-info'>Next</button>
                </div>
            </div>
        </div>
    )
}

// export reviews
export default Reviews