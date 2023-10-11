import React from 'react';

const RatingStars = ({ rating }) => {
    const maxRating = 5; // Maximum rating value (number of stars)

    // Generate an array of stars to represent the rating
    const stars = Array.from({ length: maxRating }, (_, index) => (
        <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill={index < rating ? "#DD9F00" : "none"}
        >
            <path
                d="M8.12716 5.9961C8.0084 6.12343 7.95384 6.30757 7.98089 6.48817L8.38851 8.98401C8.4229 9.19554 8.3422 9.40962 8.18218 9.53187C8.02537 9.6587 7.81674 9.67391 7.64572 9.57246L5.61496 8.40063C5.54435 8.35903 5.46594 8.33671 5.3857 8.33418H5.26144C5.21834 8.34128 5.17616 8.3565 5.13765 8.37983L3.10643 9.55724C3.00601 9.61304 2.8923 9.63282 2.78088 9.61304C2.50944 9.55622 2.32833 9.27012 2.3728 8.96828L2.78088 6.47244C2.80793 6.29033 2.75337 6.10517 2.63461 5.97581L0.978919 4.20031C0.840448 4.05168 0.792304 3.82848 0.855579 3.62708C0.91702 3.4262 1.07383 3.27959 1.26320 3.24662L3.54201 2.88087C3.71533 2.86108 3.86756 2.74441 3.94551 2.57193L4.94965 0.294225C4.97350 0.243497 5.00422 0.196826 5.04136 0.157258L5.08262 0.121748C5.10417 0.0953695 5.12893 0.0735562 5.15644 0.0558013L5.20642 0.0355099L5.28437 0H5.47740C5.64981 0.0197841 5.80157 0.133923 5.88090 0.304371L6.89834 2.57193C6.97170 2.73781 7.11430 2.85297 7.27891 2.88087L9.55772 3.24662C9.75030 3.27706 9.91124 3.42417 9.97497 3.62708C10.03500 3.83050 9.98323 4.05371 9.84200 4.20031L8.12716 5.99610Z"
            />
        </svg>
    ));

    return <div>{stars}</div>;
};

export default RatingStars;
