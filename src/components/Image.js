import React from 'react'

function Image({ width,src, alt, className }) {
    return (
        <img
            // width={width}
            src={src}
            alt={alt}
            className={className}
            // style={style}
        />
    )
}

export default Image
