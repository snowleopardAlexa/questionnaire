import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ImageOne from './ImageOne';

// create array of objects - stars icons
const starsArray = (length) => [
    ...Array(length)
];

// create function that will return star icon and enable it to change color from red to grey
// upon user hovering on it to rate.
function Star({ selected = false, onSelect }) {
    return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}

// create function that shows stars in the array and displays text 0-10 number of stars.
// the text must change, write state here
function RatePhotos({ totalStars }) {
    const [selectedStars, setSelectedStars ] = useState(0);
    return (
        <>
        <ImageOne />
        {starsArray(totalStars).map((n,i) => (
            <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i+1)}
        />
        ))}
        <p>{selectedStars} of {totalStars}</p>
        </>
    )
}

export default RatePhotos;