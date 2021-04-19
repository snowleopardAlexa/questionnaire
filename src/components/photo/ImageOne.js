import React from 'react';
import dog from '../../img/dog.jpg';

function ImageOne() {
    return (
        <div class="image-one">
            <h2>Rate the photo below</h2>
            <img src={dog} width={200} height={200} />
        </div>
    );
}

export default ImageOne;