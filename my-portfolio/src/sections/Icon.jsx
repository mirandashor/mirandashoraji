import React from 'react';

const Icon = ( {href, img, alt} ) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="iconBtn">
            <img src={img} alt={alt}/>
        </a>
    );
}

export default Icon;